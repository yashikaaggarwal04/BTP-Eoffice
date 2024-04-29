import React from "react";
import { Page, Text, Document, StyleSheet, View, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";


      
// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  dateRight: {
    position: "absolute",
    fontSize: 14,
    top: 25,
    right: 35,
    fontWeight: "normal",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    fontSize: 14,
    marginBottom: 3,
    fontWeight: "normal",
  },
  boldSection: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  table: { 
    display: "table", 
    width: "auto",
    borderStyle: "solid", 
    borderWidth: 1,
    borderCollapse: "collapse",
    marginBottom: 10,
  }, 
  tableRow: { 
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  }, 
  tableColHeader: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCol: { 
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    fontSize: 12,
  },
  footer: {
    fontSize: 12,
    textAlign: "left",
    marginTop: 10,
    fontWeight: "bold",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  signature: {
    position: "absolute",
    bottom: 30,
    right: 35,
    fontSize: 12,
    color: "black",
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.header}>Department of Aerospace Engineering</Text>
      <Text style={styles.header}>Indian Institute of Technology Kharagpur, Kharagpur</Text>
      <Text style={styles.dateRight}>Date: 17-11-2023</Text>
      <Text style={styles.title}>CORRIGENDUM-III</Text>
      <Text style={styles.section}>Sub: Tender for "Realtime FPGA controller with Multifunction I/O"</Text>
      <Text style={styles.section}>Tender ID: IIT/AE/TAC/ADG/23-24/EQ-RTC, dated: 19/10/2023</Text>
      <Text style={styles.boldSection}>With reference to the above, the last date revised for submission of tender stands revised as detailed below:</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>As given in original tender</Text>
          <Text style={styles.tableColHeader}>Is being revised to</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>
            Last Date and Time for Submitting the Tender Document: 10th November 2023 at 15:00 Hrs (IST)
          </Text>
          <Text style={styles.tableCol}>
            Last Date and Time for Submitting the Tender Document: 24th November 2023 at 15:00 Hrs (IST)
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>
            Time and Date of Opening of Technical Bids: 10th November 2023 at 15:00 Hrs (IST)
          </Text>
          <Text style={styles.tableCol}>
            Time and Date of Opening of Technical Bids: 24th November 2023 at 16:30 Hrs (IST)
          </Text>
        </View>
      </View>
      <Text style={styles.footer}>All others specifications, terms and conditions of the tender will remain the same.</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
    </Page>
  </Document>
);


const PDFLayout = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ alignSelf: 'flex-start' }}>
        <PDFDownloadLink document={<MyDocument />} fileName="Corrigendum-III.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
      <PDFViewer style={{ flex: 1, width: '100%', height: '100%' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
  
  export default PDFLayout;