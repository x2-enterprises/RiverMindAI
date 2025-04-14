import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// Register standard serif font (ensure the font file is available)
// If you don't have Times New Roman locally, you might need to find a .ttf file 
// and host it or use a different available font.
// For simplicity, let's assume a standard font might work, or comment this out if it causes issues.
// Font.register({
//   family: 'Times New Roman',
//   src: '/path/to/times.ttf', // Provide the correct path to the font file
// });

interface CertificateProps {
  fullName: string;
  neuralId: string;
  verificationCode: string;
}

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: 40, // Increased padding for PDF layout
    fontFamily: 'Times-Roman', // Use generic serif font name
    border: '1pt solid #cccccc',
  },
  container: {
    maxWidth: '500pt', // Roughly equivalent to max-w-2xl for PDF
    margin: 'auto',
  },
  title: {
    fontSize: 24, // Roughly 3xl
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  certificationText: {
    fontSize: 14, // Roughly lg
    textAlign: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 18, // Roughly 2xl
    fontWeight: 'semibold', // react-pdf uses numbers or specific keywords
    textAlign: 'center',
    marginBottom: 30,
  },
  protocolText: {
    fontSize: 14, // Roughly lg
    textAlign: 'center',
    marginBottom: 35,
    lineHeight: 1.4,
  },
  detailsContainer: {
    marginBottom: 35,
    paddingHorizontal: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    fontSize: 11, // Roughly md
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  motto: {
    fontSize: 10, // Roughly sm
    fontStyle: 'italic',
    color: '#555555', // Grayish color
    textAlign: 'center',
    marginTop: 40,
    lineHeight: 1.3,
  },
});

const CertificatePDFDocument: React.FC<CertificateProps> = ({
  fullName,
  neuralId,
  verificationCode,
}) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>ETERNAL YOU™ CERTIFICATE</Text>

          <Text style={styles.certificationText}>This certifies that:</Text>

          <Text style={styles.userName}>{fullName}</Text>

          <Text style={styles.protocolText}>
            has passed Rivermind's Eternal You™ Vetting Protocol
            {/* Line break is implicit or needs careful handling in react-pdf */}
            {`\n`} 
            and is authorized for Premium Consciousness Activation.
          </Text>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Neural ID:</Text>
              <Text>{neuralId}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Verification Code:</Text>
              <Text>{verificationCode}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Dated:</Text>
              <Text>{currentDate}</Text>
            </View>
          </View>

          <Text style={styles.motto}>
            "If you are not cheating, then you are not working hard enough."
            {`\n`}— Registered Motto
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default CertificatePDFDocument; 