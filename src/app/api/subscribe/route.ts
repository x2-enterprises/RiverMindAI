import { NextResponse } from 'next/server';

// Reusing the same Formspree ID
const FORMSPREE_FORM_ID = "meoandky";

// Helper function (could be shared if needed)
async function submitToFormspree(data: { email: string; [key: string]: any }) {
  if (!FORMSPREE_FORM_ID) {
    console.error("Formspree ID not set for subscription endpoint.");
    return { success: false, message: "Server configuration error." };
  }
  const endpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Formspree submission failed for subscription:", response.status, errorData);
      return { success: false, message: errorData.errors?.map((e: any) => e.message).join(", ") || 'Submission to Formspree failed.' };
    } else {
      console.log("Successfully submitted subscription email to Formspree.");
      return { success: true, message: "Submitted successfully." };
    }
  } catch (error) {
    console.error("Error submitting subscription to Formspree:", error);
    return { success: false, message: "An unexpected error occurred during submission." };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: "Valid email is required" }, { status: 400 });
    }

    // Forward to Formspree
    const formspreeResult = await submitToFormspree({ 
      email: email, 
      _subject: `New Rivermind Homepage Subscription: ${email}`
      // Add other fields if your homepage form collects more
    });

    if (!formspreeResult.success) {
        // Return Formspree's error message if available
        return NextResponse.json({ message: formspreeResult.message }, { status: 400 }); 
    }

    // Return a success response to the client-side form
    return NextResponse.json({ message: "Subscription successful!" });

  } catch (error) {
    console.error("Error in /api/subscribe:", error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    }
    return NextResponse.json({ message: `Failed to process subscription: ${errorMessage}` }, { status: 500 });
  }
} 