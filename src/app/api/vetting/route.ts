import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
// Ensure OPENAI_API_KEY is set in your environment variables (.env.local)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Your Formspree Form ID
const FORMSPREE_FORM_ID = "meoandky";

// Define an interface for expected form data for better type safety
interface VettingFormData {
  uploadName: string;
  email: string;
  memory?: string;
  bodyScore?: number;
  adConsent?: string;
  dreamtone?: string;
  language?: string;
  forgettingFear?: string;
  simulationAwareness?: string;
  motto?: string;
  suppressedFeelings?: string;
}

// Function to generate mock response in case OpenAI fails
const generateMockResponse = (formData: VettingFormData) => ({
  fullName: formData.uploadName || "[Redacted Candidate Name]",
  email: formData.email || "[Email Not Provided]",
  approvalStatus: "Evaluation Pending - System Busy",
  neuralSummary: `Mock analysis: Subject ${formData.uploadName || 'Candidate'} requires further mock evaluation.`,
  diagnosticNote: "Mock diagnostic: Standard deviations within mock parameters.",
  registeredMotto: formData.motto ? `\"${formData.motto}\"` : "\"[Motto Pending Mock Analysis]\"",
  backupTimestamp: new Date().toLocaleString('en-CA', { 
      year: 'numeric', month: '2-digit', day: '2-digit', 
      hour: '2-digit', minute: '2-digit', timeZoneName: 'short' 
    }).replace(",", ""),
});

// Helper function to submit data to Formspree
async function submitToFormspree(data: { email: string; name?: string; [key: string]: any }) {
  if (!FORMSPREE_FORM_ID) {
    console.log("Formspree ID not set, skipping submission.");
    return;
  }
  const endpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data) // Send relevant data as JSON
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Formspree submission failed:", response.status, errorData);
    } else {
      console.log("Successfully submitted email to Formspree.");
    }
  } catch (error) {
    console.error("Error submitting to Formspree:", error);
  }
}

export async function POST(request: Request) {
  let apiResponse;
  let formData: VettingFormData | null = null; 

  try {
    formData = await request.json();
    
    // Add null check to satisfy TypeScript and handle potential parsing errors
    if (!formData) {
      throw new Error("Failed to parse form data from request.");
    }
    
    console.log('Received vetting form data:', formData);

    // --- Submit Email to Formspree --- 
    // Now we know formData is not null here
    if (formData.email) { 
      // ... (rest of Formspree logic remains the same)
      submitToFormspree({ 
          email: formData.email, 
          name: formData.uploadName, 
          _subject: `New Rivermind Vetting Submission: ${formData.uploadName || formData.email}`,
       }).catch(err => console.error("Background Formspree submission failed:", err)); 
    } else {
        console.warn("No email found in form data, skipping Formspree submission.");
    }
    // --- End Formspree Submission ---

    // Construct the prompt (formData is guaranteed non-null here)
    const prompt = `
You are Rivermind's neural onboarding assistant. You write satirical, clinical-sounding AI analysis reports for users who have submitted to a fake consciousness upload vetting form.

Given the user input below, generate a JSON object with the following fields:
- "neuralSummary": A 1–2 sentence summary of the user's overall psychological and marketing compatibility.
- "diagnosticNote": A funny but technical-sounding note describing any glitches, flags, or traits from the submission.
- "uploadStatus": Either "Approved for Eternal You™ Beta" or "Pending Further Calibration" (make it fit the tone).
- "motto": A stylized version of their self-submitted consciousness motto (use quotes).

The tone should be part Black Mirror, part startup, part dystopian HR.

Here is the user input:

- Name: ${formData.uploadName || 'N/A'}
- Marketable Memory: ${formData.memory || 'N/A'}
- Body Score (1–10): ${formData.bodyScore || 'N/A'}
- Ad Consent: ${formData.adConsent || 'N/A'}
- Dreamtone: ${formData.dreamtone || 'N/A'}
- Language Preference: ${formData.language || 'N/A'}
- Fear of Forgetting: ${formData.forgettingFear || 'N/A'}
- Simulation Awareness: ${formData.simulationAwareness || 'N/A'}
- Consciousness Motto: ${formData.motto || 'N/A'}
- Suppressed Feelings: ${formData.suppressedFeelings || 'None'}

Please respond only with a valid JSON object with these four keys: "neuralSummary", "diagnosticNote", "uploadStatus", and "motto".
`;

    console.log("Sending prompt to OpenAI...");
    // --- OpenAI API Call --- 
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      });

      console.log("Received OpenAI response:", completion.choices[0].message.content);

      if (!completion.choices[0].message.content) {
         throw new Error("OpenAI returned an empty response.");
      }
      
      // Attempt to parse the JSON response from OpenAI
      // Add extra check in case the model didn't return perfect JSON despite the prompt
      let openAIResult;
      try {
        openAIResult = JSON.parse(completion.choices[0].message.content);
      } catch (parseError) {
        console.error("Failed to parse OpenAI response as JSON:", parseError);
        console.log("Raw OpenAI response content:", completion.choices[0].message.content);
        throw new Error("OpenAI response was not valid JSON."); // Trigger fallback
      }

      apiResponse = {
        fullName: formData.uploadName || "[Redacted Candidate Name]", 
        email: formData.email || "[Email Not Provided]", 
        approvalStatus: openAIResult.uploadStatus || "Evaluation Inconclusive",
        neuralSummary: openAIResult.neuralSummary || "Analysis Unavailable",
        diagnosticNote: openAIResult.diagnosticNote || "Diagnostics Offline",
        registeredMotto: openAIResult.motto || `\"${formData.motto || '[Motto Unavailable]'}\"`, 
        backupTimestamp: new Date().toLocaleString('en-CA', { 
            year: 'numeric', month: '2-digit', day: '2-digit', 
            hour: '2-digit', minute: '2-digit', timeZoneName: 'short' 
          }).replace(",", ""),
      };

    } catch (openaiError) {
        console.error("Error calling OpenAI API:", openaiError);
        console.log("Falling back to mock response due to OpenAI error.");
        // formData is guaranteed non-null here because the outer try block succeeded past the null check
        apiResponse = generateMockResponse(formData);
    }
    // --- End OpenAI API Call ---

    console.log('Sending final vetting response:', apiResponse);
    return NextResponse.json(apiResponse);

  } catch (error) {
    console.error("Error processing /api/vetting request:", error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    }
    // Use formData captured outside the try block if available for fallback
    // If formData is null here, it means the initial request.json() failed
    const fallbackResponse = generateMockResponse(formData || { email: 'unknown', uploadName: 'unknown' }); 
   
    return NextResponse.json(fallbackResponse, { 
        status: 500, 
        statusText: `Failed to process vetting: ${errorMessage}` 
    });
  }
} 