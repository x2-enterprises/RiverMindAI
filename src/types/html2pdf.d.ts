// Basic type declaration for html2pdf.js since @types/html2pdf.js doesn't exist
// This tells TypeScript to treat the imported module as type 'any' 
// or allows for basic type checking if we define a minimal interface.

declare module 'html2pdf.js' {
  // You could define a more specific type here if needed, but 'any' is often sufficient
  // for libraries without official types.
  const html2pdf: any; 
  export default html2pdf;
} 