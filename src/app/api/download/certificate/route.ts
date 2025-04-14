import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import CertificatePDFDocument from '@/components/CertificatePDFDocument';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

// Helper function for basic ID generation (replace with more secure methods if needed)
function generateNeuralId(): string {
  // Example: Prefix + Timestamp + Random suffix using uuid for better randomness
  const prefix = 'RNID';
  const timestamp = Date.now().toString(36).toUpperCase(); // Base36 timestamp
  const randomSuffix = uuidv4().substring(0, 8).toUpperCase(); // Use first 8 chars of UUID
  return `${prefix}-${timestamp}-${randomSuffix}`;
}

// Helper function to generate verification code
function generateVerificationCode(): string {
  // Example: Use UUID for a more unique code
  return uuidv4().substring(0, 12).toUpperCase(); // 12-char code from UUID
}

// GET handler for certificate download
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fullName = searchParams.get('name') || "[User's Upload Name]"; // Get name from query param

  const neuralId = generateNeuralId();
  const verificationCode = generateVerificationCode();

  try {
    // Create the element instance first
    const certificateElement = React.createElement(CertificatePDFDocument, {
      fullName: fullName,
      neuralId: neuralId,
      verificationCode: verificationCode,
    });

    // Pass the element variable to renderToStream, casting to ReactElement
    const pdfStream = await renderToStream(certificateElement as React.ReactElement);

    // Use NextResponse to stream the PDF back
    const response = new NextResponse(pdfStream as any); // Cast stream type if needed

    // Set headers for PDF download
    const safeFullName = fullName.replace(/[^a-zA-Z0-9_\-\.]/g, ''); // Sanitize filename
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set(
      'Content-Disposition',
      `attachment; filename="Eternal_You_Certificate_${safeFullName}.pdf"`
    );

    return response;

  } catch (error) {
    console.error("Error generating PDF:", error);
    // Provide a more specific error message if possible
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Failed to generate certificate: ${errorMessage}` }, { status: 500 });
  }
} 