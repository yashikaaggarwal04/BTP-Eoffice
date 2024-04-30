import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  PDFDownloadLink,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  body: {
    // paddingTop: 15,
    // paddingBottom: 35,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  MY: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: "flex",
    // alignItems: "center", // Center content horizontally
    flexDirection: "column",
    // justifyContent: "center", // Center content vertically
    margin: "20mm",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 2,
    fontWeight: "bold",
    paddingTop: "0",
  },
  // Other styles remain unchanged
  italic: {
    fontStyle: "italic",
  },

  text: {
    marginVertical: 8,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40, // Add margin at the bottom of each line
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    // textAlign: "center",
    color: "grey",
  },
  signature: {
    position: "absolute",
    bottom: 30,
    right: 35,
    fontSize: 12,
    color: "black",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#f3f3f3",
  },
  serialNumberHeader: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    // backgroundColor: '#f3f3f3'
  },
  serialNumberCol: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
  },
  sectionHeader: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    // backgroundColor: '#f3f3f3'
  },
  sectionCol: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
  },
  titleheader: {
    width: "55%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    // backgroundColor: '#f3f3f3'
  },
  titleCol: {
    width: "55%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
  },
  pageHeader: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    // backgroundColor: '#f3f3f3'
  },
  pageCol: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
  },
  // tableCol: {
  //   width: '25%',
  //   borderStyle: 'solid',
  //   borderColor: '#bfbfbf',
  //   borderRightWidth: 1,
  // },
  tableCellHeader: {
    margin: 6,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 10
  },


  
});

const PDFFile = ({ lastSubmission }) => (
  <Document>
    {console.log("lastSubimssion", lastSubmission)}
    <Page size="A4" style={styles.body}>
    <Image
    style={{ width: 100, height: 100, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
      {/* Your content here */}
      
      <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
      <Text style={styles.title}>
        Sponsored Research and Industrial Consultancy
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 20,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Tender Enquiry Document
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 30,
          fontWeight: "bold",
          fontSize: 11.5,
        }}
      >
        for
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 20,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        Purchase of ________________________________ (Name of the Equipment)
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: -5,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        <Text style={styles.italic}>For & On Behalf of</Text>
        {" SRIC IIT KHARAGPUR"}
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 5,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        <Text style={styles.italic}>On E-Tender Basis</Text>
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 40,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Tender No. IIT/SRIC/Dept. Code/Project Code/PI(Short)/23-24/EQ-
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 0,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Sponsored Research and Industrial Consultancy (SRIC)
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 0,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Indian Institute of Technology Kharagpur
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 0,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Kharagpur - 721302
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 0,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Email: ______________________________ (PI’s Institute Email ID)
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <Text style={styles.signature}>
        Signature of the Tenderer/ Date with Seal
      </Text>
    </Page>

    <Page size="A4" style={styles.body}>
    <Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
      <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
      <Text style={styles.title}>
        Sponsored Research and Industrial Consultancy
      </Text>
      <Text style={{ textAlign: "center", margin: 20, fontSize: 15 }}>
        Table of Content
      </Text>
      <View style={styles.table}>
        {/* Table header */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberHeader}>
              <Text style={styles.tableCellHeader}>Sl. No.</Text>
            </View>
            <View style={styles.sectionHeader}>
              <Text style={styles.tableCellHeader}>Section</Text>
            </View>
            <View style={styles.titleheader}>
              <Text style={styles.tableCellHeader}>Title</Text>
            </View>
            <View style={styles.pageHeader}>
              <Text style={styles.tableCellHeader}>Page No</Text>
            </View>
          </View>
          {/* Table data rows will go here */}
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>01</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section I</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                Notice Inviting Tender & List of Equipment
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>02</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section IA</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>Time schedule of Tender</Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>03</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section II</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                Instructions to Bidders and General terms and Conditions
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>04</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section III</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                General (Commercial) Conditions of Contract
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>05</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section IV</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                Special Conditions of the Contract
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>06</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section V</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                Schedule of Requirements with Techno-Commercial Terms
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>07</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section VI</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>Proforma for Technical Bid</Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>08</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section VII</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>Price Bid Declaration</Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>09</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section VIII</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                Performance Security Guarantee Bond
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>10</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section IX</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                Bid Security/ EMD Details Proforma
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>11</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section X</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>Undertaking</Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>12</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section XI</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                Self-certificate for Local Content (Preference to make in India
                for price preference)
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>13</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section XII</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>OEM Authorization</Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>14</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section XIII</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                (For Goods/ Services Contracts) Certificate - Bidder Not from/
                from Country sharing Land border with India & Registration of
                Bidder with Competent Authority
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>15</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section XIV</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>
                (For Works Contracts, including Turnkey Contracts) Certificate –
                Bidder Not from/ from Country sharing Land border with India,
                Registration of Bidder with Competent Authority & not
                sub-contract any work to a contractor from such countries unless
                such contractor is registered with the Competent Authority
              </Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.serialNumberCol}>
              <Text style={styles.tableCell}>16</Text>
            </View>
            <View style={styles.sectionCol}>
              <Text style={styles.tableCell}>Section XV</Text>
            </View>
            <View style={styles.titleCol}>
              <Text style={styles.tableCell}>Checklist for the Tenderer</Text>
            </View>
            <View style={styles.pageCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
        </View>
      </View>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <Text style={styles.signature}>
        Signature of the Tenderer/ Date with Seal
      </Text>
    </Page>

    <Page size="A4" style={styles.MY}>
    <Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
      <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
      <Text style={styles.title}>
        Sponsored Research and Industrial Consultancy
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 5,
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Section - I
      </Text>
      <Text
        style={{
          textAlign: "left",
          margin: 10,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        No. IIT/SRIC/Dept. Code/Project Code/PI(Short)/23‐24/EQ‐{" "}
        <Text style={{ paddingRight: 70 }}></Text> Date: ___/___/____
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 2,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        Invitation for Bids / Notice Inviting Tender
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 10,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        (E-Procurement Mode)
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        Indian Institute of Technology Kharagpur is set up by the Act of
        parliament called The Institutes of Technology Act 1961 and it is
        declared as Institutions of National Importance and Institutions of
        Eminence. Sponsored Research and Industrial Consultancy (SRIC) is a
        Research and Industrial Consultancy unit of Indian Institute of
        Technology Kharagpur. On behalf of Sponsored Research and Industrial
        Consultancy, INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR (IIT KGP) e-tender
        are invited from all domestic manufacturer having registered office in
        India, who fulfil the criteria mentioned in the tender documents for
        Supply of (Name of the Equipment). The list of equipment and their
        specifications are given in Section V.
      </Text>
      <Text style={{textAlign: 'left', margin:10, fontSize:12}}>Dated: 	__/__/____</Text>		     
      <Text style={{fontSize:"12px", textAlign:'right'}}>Dean (R&D)</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
   </Page>
   <Page size="A4" style={styles.MY}>
   <Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
      <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
      <Text style={styles.title}>
        Sponsored Research and Industrial Consultancy
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 5,
          fontWeight: "bold",
          fontSize: 13,
        }}
      >
        Section - II
      </Text>
      <Text
        style={{ textAlign: "center", margin: 10, marginTop: 5, fontSize: 13 }}
      >
        {" "}
        INSTRUCTIONS TO BIDDERS
      </Text>

      <Text
        style={{
          textAlign: "left",
          margin: 5,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        A. INTRODUCTION
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        DEFINITIONS
      </Text>

      <Text style={{ textAlign: "left", margin: 3, fontSize: 11.5 }}>
        “The Purchaser” means the DEAN (R&D), (IIT KGP-SRIC) INDIAN INSTITUTE OF
        TECHNOLOGY KHARAGPUR, KHARAGPUR, SRIC
      </Text>
      <Text style={{ textAlign: "left", margin: 3, fontSize: 11.5 }}>
        “The Bidder” means the individual or firm who participates in the tender
        and submits bid
      </Text>
      <Text style={{ textAlign: "left", margin: 3, fontSize: 11.5 }}>
        “The Agency” means the individual or firm rendering the services under
        the contract.
      </Text>
      <Text style={{ textAlign: "left", margin: 3, fontSize: 11.5 }}>
        “The Services” means all activities related to conduct & performance of
        contractual obligations under the contract.
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
   </Page>
   
   <Page size="A4" style={styles.MY}>
   <Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
      <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
      <Text style={styles.title}>
        Sponsored Research and Industrial Consultancy
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (VI) Must have supplied similar equipment to laboratories of State or
        Central Government Institutions or reputed Educational or Research
        Institution and proof of such supplies should be produced
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (VII) It should have PAN, TIN number and GST Registrations (proof in
        this regard shall be uploaded with the bid)
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (VIII) It should not have been blacklisted by the Government
        Organizations, GOI, Autonomous bodies. Undertaking in Section X in this
        regards has to be uploaded.
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (IX) Registration Certificate/Certificate of incorporation, if any,
        including the certificate of MSME/NSIC/Other EMD Exemption Document etc.
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (X) Authorized dealer Certificate from Manufacturer if the agency is a
        dealer.
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (XI) Bidders should not be associated, or have been associated in the
        past, directly or indirectly, with a firm or any of its affiliates which
        have been engaged by the Purchaser to provide consulting services for
        the preparation of the design, specifications, and other documents to be
        used for the procurement of the goods to be purchased under this
        Invitation of Bids.{" "}
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (XII) Relaxation of prior turnover and experience for Start-ups
        (Ministry of Finance, Department of Expenditure, Public Procurement
        Division OM No F.20\212014-PPD dated 25.07.2016 and subsequent
        clarifications dt 20.09.2016; 27.07.2019; 29.06.2020
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (XIV) Solvency Certificate: The applicant should furnish solvency
        certificate issued by the applicant’s bankers.
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        (XIII) Eligibility Restrictions based on Reciprocity : If so stipulated
        in the Tender Document, entities from such countries identified as not
        allowing Indian companies to participate in their Government procurement
        shall not be allowed to participate on a reciprocal basis in this
        tender. The term 'entity' of a country shall have the same meaning as
        under the FDI Policy of DPIIT as amended from time to time.
      </Text>
      <Text
        style={{
          textAlign: "left",
          margin: 5,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        2. COST OF BIDDING
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        3.1 The services required to be rendered, bidding procedures and
        contract terms and conditions are prescribed in the Bid Documents. The
        Bid documents include:
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        a) Notice Inviting Tender & List of Equipment - Section - I
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        b) Time Schedule of Tender - Section IA
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        c) Instructions to Bidders and General terms and Conditions - Section II
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        d) General (Commercial) Conditions of Contract - Section III
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        e) Special Conditions of the Contract - Section IV
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <Text style={styles.signature}>
        Signature of the Tenderer/ Date with Seal
      </Text>
    </Page>

   <Page size="A4" style={styles.MY}>
   <Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
      <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
      <Text style={styles.title}>
        Sponsored Research and Industrial Consultancy
      </Text>
      <Text style={{ textAlign: "left", margin: 5, fontSize: 12 }}>
        f) Schedule of Requirements with Techno-Commercial Terms - Section V
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
   </Page>

   <Page size="A4" style={styles.MY}>
   <Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
  <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:10}}>
    <Text style={{fontWeight:'normal'}}>Conditions shall be given by the bidder.</Text>
    <Text style={{fontWeight:"bold"}}> A bid without clause-by-clause compliance of terms and conditions shall not be considered.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.5	The Copy of Audited Annual Accounts of the organization for the financial year 2020-21, 2021-22 and 2022-23 in support of an average annual turnover of at least <Text style={{fontWeight:"bold"}}>0,00,000 INR (Min 50% of estimated value)</Text> during last 3 years i.e. 2020-21, 2021-22 and 2022-23 shall be uploaded.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.6 Registration Certificate of the company as per eligibility criteria.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.7 Income Tax Return for three financial years i.e. 2019-20, 2020-21 and 2021-22.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.8 GST Registration Certificate.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.9 Copy of PAN of the Company/ firm.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.10 Lists of clients with reference in minimum five firms with name, designation and contact details.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.11 Self-certification of full-fledged office infrastructure.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.12 Brief on supply of laboratory equipment handled during last five years.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.13 List of offices/branches in India with address and contact details.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    4.14 Email id and phone number of the contact person of the firm.
  </Text>
  <Text style={{textAlign: 'left', margin:3, fontWeight:"bold", fontSize:11.5}}>
    5 BID FORM
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
  The bidder shall submit the bid form in their own Stationery and by using only prescribed format. Use of any other format, the bid may be liable for rejection.
  </Text>
  <Text style={{textAlign: 'left', margin:3, fontWeight:"bold", fontSize:11.5}}>
    6 BID PRICES
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    6.1 The bidder shall give FOR destination price, inclusive of all Levies & Taxes for <Text style={{fontWeight:"bold"}}>laboratory equipment for IIT KGP-SRIC.</Text> The price should be indicated as per BOQ.xls Format under Financial Cover.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    6.2 A bid submitted with an adjustable price quotation will be treated as non-responsive and rejected.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    6.3 The price quoted by the bidder shall remain fixed during the entire period of contract and shall not be subject to variation on any account.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    6.4 “DISCOUNT, if any, offered by the bidders shall not be considered unless they are specifically indicated in the price schedule. Bidders desiring to offer discount shall therefore modify their offers suitably while quoting and shall quote clearly net price taking all such factors like Discount, free service, etc, into account”.
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    6.5 The price accepted by the IIT KGP-SRIC for the supply of equipment will be inclusive of Levies and Taxes.
  </Text>
  <Text style={{textAlign: 'left', margin:3, fontWeight:"bold", fontSize:11.5}}>
  7 GUARANTEE/WARRANTY
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
  <Text style={{fontWeight:"bold"}}>Comprehensive onsite warranty for three years is required.</Text>Warranty period will start from the date of installation of items. In case at installation stores / part of stores are found defective / damaged during or after delivery to consignee, the supplier will replace or repair the store under warranty at consignee’s location in India free of cost or if any case it is required to send back to foreign manufacturer / supplier should bear the cost.
  </Text>
  <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
  <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
  <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    Bank Guarantee equivalent to the cost of equipment is required to be submitted before lifting the store. All expenses in this regard will be borne by the supplier.
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    8    BID SECURITY 
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    8.1 The bidder shall furnish, as part of his bid, a bid security/EMD as per Format specified in Section IX.  
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    8.2 IIT Kharagpur will give exemption for submission of Tender Fee and EMD to the bidders, who are registered with MSME or Central Purchase Organization or startups as recognized by DIPP as per revised rule 170 of GFR-2017 only. However, proper and valid documents in this regard must be submitted by the bidders in support of their claim.
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    8.3 After accepting Bid Security declaration, if bidder withdraw or modify their bids during the period of validity, they will not be allowed to participate to any tender of IIT Kharagpur for a period of 1 (one) year from the date of notification issued by IIT Kharagpur.
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    9 PERIOD OF VALIDITY OF BIDS 
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    9.1 Bid shall remain valid for 90 days after the date of opening of bids prescribed by IIT KGP-SRIC. A bid valid for a shorter period shall be rejected by IIT KGP-SRIC as non-responsive. 
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    9.2 In exceptional circumstances, IIT KGP-SRIC may request the consent of the bidder for an extension to the period of bid validity. The request and the response thereto shall be made in writing. The Bid Security Self Declaration as per Section IX shall also be suitably extended. A bidder accepting the request and granting extension will not be permitted to modify his bid.
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    C. SUBMISSION OF BIDS 
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    10 Information for Bidder on e-Procurement
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    10.1 Tender Documents may be downloaded from Central Public Procurement Portal http://eprocure.gov.in/eprocure/app. Aspiring Bidders who have not enrolled/ registered in e-procurement should enroll/register before participating through the website http://eprocure.gov.in/eprocure/app. The portal enrolment is free of cost. Bidders are advised to go through instructions provided at ‘Instructions for online Bid Submission’.
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    10.2 Help for Service Providers, FAQ, Information about DSC and Bidders Manual Kit containing the detailed guidelines for e-Procurement system are also available on Central Public Procurement Portal. [https://eprocure.gov.in/eprocure/app]
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    10.3 It is mandatory for all the bidders to have a valid Class-II/Class-III Digital Signature Certificate (in the name of person having power of attorney to sign the Bid) from any of the licensed Certifying Agency (Bidders can see the list of licensed CA’s from the link www.cca.gov.in) to participate in e-Procurement of IIT KHARAGPUR.
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    10.4 It is mandatory for the bidders to get their firm/company registered with e-procurement portal https:// eprocure.gov.in/eprocure/app to have user ID & password.
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    10.5 Bidder should log into the site well in advance for bid submission so that he/she upload the bid in time i.e. on or before the bid submission time. Bidder will be responsible for any delay due to other issues.
  </Text>
  <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
  <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
</Page>

<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
  <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'bold'}}>
  10.6 Bidders may download and refer the "Instructions for Online Bid Submission" from 
    https://eprocure.gov.in/eprocure/app;jsessionid=A8B54EEC72D86DF9AA9D9B2DDACDAB8D.eprocgep4?page=BiddersManualKit&service=page.
</Text>

  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.7 The tender documents shall be submitted online in the prescribed format given on the websites and technical bids received online shall be opened as per NIT or Corrigendum thereof. No other mode of submission is acceptable. Detailed credentials as per the requirement of eligibility criteria and all tender papers except Bill of Quantities are to be submitted in “Technical Bid”.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.8 Bill of Quantities with rates duly filled in are to be submitted in the format provided online in the name of “Financial Bid”.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.9 Bidders cannot submit the tender after the due date and time of e-bid submission. Time being displayed on Central Public Procurement Portal https://eprocure.gov.in/eprocure/app (“Server System Clock Time”) shall be final and binding on the bidder. e-Bids are required to be submitted by bidders, only as per the Indian Standard Time (IST) and not the time as per their location/country.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.10 The bidders are advised to submit their e-bids well before the e-bid due date. IIT KHARAGPUR shall not be responsible for any delay in submission of e-bids for any reason including server and technical problems.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.11 The Technical and Financial Bid shall be digitally signed by the Authorized Signatory of the bidder & submitted “on-line” only. The authorized signatory of the bidder must be in possession of Power of Attorney before submitting the digitally signed bid. Scanned copies of various documents can be prepared in .pdf file format.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.12 A standard BoQ format has been provided with the tender document to be filled by all the bidders. Bidders are requested to note that they should necessarily submit their financial bids in the format provided and no other format is acceptable. Bidders are required to download the BoQ file, open it and complete the blue colored (unprotected) cells with their respective financial quotes and other details (such as name of the bidder). No other cells should be changed. Once the details have been completed, the bidder should save it and submit it online, without changing the filename. If the BoQ file is found to be modified by the bidder, the bid will be rejected.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.13 The server time (which is displayed on the bidders’ dashboard) will be considered as the standard time for referencing the deadlines for submission of the bids by the bidders, opening of bids etc. The bidders should follow this time during bid submission.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.14 All the documents being submitted by the bidders would be encrypted using PKI encryption techniques to ensure the secrecy of the data. The data entered cannot be viewed by unauthorized persons until the time of bid opening. The confidentiality of the bids is maintained using the secured Socket Layer 128 bit encryption technology. Data storage encryption of sensitive fields is done.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.15 The uploaded tender documents become readable only after the tender opening by the authorized bid openers.</Text>
  </Text>
  <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
  <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
  <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >10.16 Upon the successful and timely submission of bids, the portal will give a successful bid submission message & a bid summary will be displayed with the bid no. and the date & time of submission of the bid with all other relevant details.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >10.17 Kindly add scanned PDF of all relevant documents in a single PDF file of compliance sheet.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold', textAlign:"center"}}>GENERAL TERMS AND CONDITIONS: </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>1. BID OPENING AND EVALUATION </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>1.1 OPENING OF BIDS BY SRIC, IIT KGP </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>1.1.1 IIT KGP-SRIC shall open the Technical Bids Electronically on 00/00/2023 at 12:00 HRS IIT KHARAGPUR (SRIC).</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>1.1.2 The date fixed for opening of bids if subsequently declared as holiday by SRIC, IIT KGP the revised date of schedule will be notified. However, in absence of such notification, the bids will be opened on next working day, time and venue remaining unaltered.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>1.1.3 The financial bid will be opened only for bidders declared eligible and selected after techno-commercial evaluation. The financial bid will be opened on a date fixed after evaluation of techno-commercial bids and will be intimated to all eligible bidders in advance.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>2. CLARIFICATION OF BIDS </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>In case any bidder requires any clarification, bidder can feel free to raise their query on or before the date given in SECTION-1A of the tender document. Release of response to clarifications on queries shall be available in the Institute’s website www.iitkgp.ac.in. by the respective principal investigator.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>All interested bidders shall follow the institute’s website and CPP Portal at regular intervals for clarifications / corrigendum if any.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>3. SELECTION PROCEDURE </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>3.1 Agencies found to fulfil eligibility conditions will be considered after verifications of eligibility criteria mentioned in Section II.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>3.2 The bidders shall be evaluated as per criteria mention in the tender documents.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >3.3 Financial bids of the selected agencies only shall be opened.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>4. Evaluation of Bids </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>4.1 The technical bids will be evaluated in two steps </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>The bids will be examined based on eligibility criteria stipulated at Section-II-1 to shortlist the eligible bidders. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>The technical bids of only the short listed eligible bidders shall be evaluated based on technical specifications stipulated. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>The bidders whose technical bid is found to meet both the requirements as specified above will qualify for opening of the financial bid and will be informed about the date and time of the opening of the financial bid.</Text>
  </Text>
</Page>




<Page style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >The duly constituted Tender Evaluation Committee (TEC) shall evaluate the bids. The TEC shall be empowered to take appropriate decisions on minor deviations, if any.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >The bidder’s name, bid prices, discounts and such other details considered as appropriate will be announced at the time of opening of the financial bids.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >4.2 Comparison of Bids</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>Only the short-listed bids from the bid evaluation shall be considered for commercial comparison </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>The Financial bids will be evaluated on the basis of prices quoted.  </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>The contract will be awarded to lowest evaluated bidder </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >4.2.1 SRIC-IIT KGP reserves the right to offer the contract to a qualified bidder.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >4.2.2 SRIC-IIT KGP’s decision in regard to evaluation & selection shall be FINAL and binding on the Agency and same shall not be challenged by the agency before the Court.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>5. CONTACTING SRIC, IIT KGP</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>5.1 No bidder shall try to influence SRIC, IIT KGP on any matter relating to the bid. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>5.2 Any effort by a bidder to influence SRIC, IIT KGP in SRIC, IIT KGP’s bid evaluation, bid comparison or contract award decision shall result in the rejection of the bid. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>6. AWARD of Contract</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>6.1 IIT KGP-SRIC shall award the contract to the Bidder(s) whose Bid(s) has been determined to be substantively responsive, eligible and qualified, technically suitable and who has offered the lowest evaluated bid price as per evaluation criteria detailed in the tender document. The contract will be awarded based on the guidelines mentioned in the ‘Public Procurement (Preference to Make in India), Order 2017’ order no. P- 45021/2/2017-PP (B.E.-II) dated. 16/09/2020 of Ministry of Commerce and Industry, Department for Promotion of Industry and Internal Trade (Public Procurement Section) and Purchase Preference and facilities to MSEs (Public Procurement Policy for the Micro and Small Enterprises (MSEs) Order, 2012 and its amendments 09.11.2018) and any subsequent revision thereafter.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>6.2 Award of work shall be considered on the basis of requirement as assessed by SRIC, IIT KGP.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>6.3 A purchase order will be issued by SRIC, IIT KGP to the successful bidder. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>6.4 The Agency should supply the equipment as early as possible after the award of purchase order. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>6.5 Upon the successful bidder furnishing of performance security pursuant to clause 2 Section III, IIT KGP-SRIC shall discharge the bid security in pursuant clause to 8, Sec II.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>6.6 The selection of the agency will be at the sole discretion of the SRIC, IIT Kharagpur.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>6.7 It shall be mandatory for the successful bidder to be registered on GeM and obtain a unique GeM seller ID before the placement of LoA or the contract. This ID shall be incorporated in the contract.</Text>
  </Text>
</Page>


<Page style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>7. SRIC, IIT KGP’s RIGHT TO ACCEPT ANY BID AND TO REJECT ANY OR ALL BIDS</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>IIT KGP –SRIC reserves the right to accept or reject any bid, and to annul the bidding process and reject all bids, at any time prior to award of contract without assigning any reason whatsoever and without thereby incurring any liability to the affected bidder or bidders on the grounds of SRIC, IIT KGP’s action.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>8. JURISDICTION</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>This tender and or the contract or work order issued under this tender shall be governed by Laws of India and shall be exclusive jurisdiction of courts at Medinipur, West Bengal.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>9. TAXES</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>Suppliers shall be entirely responsible for all taxes, duties, license fees, octroi, road permits, etc., incurred until delivery of the contracted Goods to the Purchaser.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>10. DUTIES</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>IIT Kharagpur is exempted from paying custom duty under notification No.51/96 (partially or full) and necessary “Custom Duty Exemption Certificate” can be issued after providing following information and Custom Duty Exemption Certificate will be issued to the shipment in the name of the Institute, (no certificate will be issued to third party): The procured product should be used for teaching, scientific and research work only.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >11. Bidders should be the manufacturer / authorized dealer.Letter of Authorization from original equipment manufacturer (OEM) on the same and specific to the tender should be enclosed. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(ii) An undertaking from the OEM is required stating that they would facilitate the bidder on a regular basis with technology/product updates and extend support for the warranty as well.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(iii) OEM should be internationally reputed Branded Company.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(iv) Non-compliance of tender terms, non-submission of required documents, lack of clarity of the specifications, contradiction between bidder specification and supporting documents etc. may lead to rejection of the bid.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(v) In the tender, either the Indian agent on behalf of the Principal/OEM or Principal/OEM itself can bid but both cannot bid simultaneously for the same item/product in the same tender.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(vi) If an agent submits bid on behalf of the Principal/OEM, the same agent shall not submit a bid on behalf of another Principal/OEM in the same tender for the same item/product.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>12. Conflict of Interest</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>Any bidder having a conflict of interest, which substantially affects fair competition, shall not be eligible to bid in this tender. Bids found to have a conflict of interest shall be rejected as nonresponsive. Bidder shall be required to declare the absence of such conflict of interest on Company Letter-head Along with supporting documents, if any. A bidder in this Tender Process shall be considered to have a conflict of interest if the bidder: </Text>
  </Text>
  <Text style={{fontWeight:'normal', fontSize:12}}>(I)	directly or indirectly controls, is controlled by or is under common control with another Bidder; or </Text>
  
</Page>


<Page style={styles.body}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(II) receives or have received any direct or indirect subsidy/ financial stake from another bidder; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(III) has the same legal representative/ agent as another bidder for purposes of this bid. A Principal can authorize only one agent, and an agent also should not represent or quote on behalf of more than one Principal. However, this shall not debar more than one Authorised distributor from quoting equipment manufactured by an Original Equipment Manufacturer (OEM), in procurements under Proprietary Article Certificate; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(IV) has a relationship with another bidder, directly or through common third parties, that puts it in a position to have access to information about or influence the bid of another Bidder or influence the decisions of the Procuring Entity regarding this Tender process; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(V) participates in more than one bid in this tender process. Participation in any capacity by a Bidder (including the participation of a Bidder as sub-contractor in another bid or vice-versa) in more than one bid shall result in the disqualification of all bids in which he is a party. However, this does not limit the participation of a non-bidder firm as a sub-contractor in more than one bid; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(VI) would be providing goods, works, or non-consulting services resulting from or directly related to consulting services that it provided (or were provided by any affiliate that directly or indirectly controls, is controlled by, or is under common control with that firm), for the procurement planning (inter-alia preparation of feasibility/ cost estimates/ Detailed Project Report (DPR), design/ technical specifications, terms of reference (ToR)/ Activity Schedule/ schedule of requirements or the Tender Document etc) of this Tender process; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>(VII) has a close business or family relationship with a staff of the Procuring Organisation who: (i) are directly or indirectly involved in the preparation of the Tender document or specifications of the Tender Process, and/or the evaluation of bids; or (ii) would be involved in the implementation or supervision of resulting Contract unless the conflict stemming from such relationship has been resolved in a manner acceptable to the Procuring Entity throughout the Tender process and execution of the Contract</Text>
  </Text>
</Page>


<Page style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'center', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>SECTION - III</Text>
  </Text>
  <Text style={{textAlign: 'center', margin:5,  fontSize:12}}>
  <Text>GENERAL (COMMERCIAL) CONDITIONS OF CONTRACT</Text>
  </Text>
  
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>1. APPLICATION</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>The general condition shall apply in contracts made by IIT KGP-SRIC for the procurement of goods/services.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>2. PERFORMANCE SECURITY</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>2.1 The successful bidder shall be required to deposit 10% of the total value of the order as performance security, within 14 days of issue of Purchase Order /letter of intent in the form of D.D*/Pay Order*/Insurance Surety bonds/Fixed Deposit Receipt*/Bank Guarantee /performance security bond prescribed in Section (VIII) from commercial bank drawn in favour of “IIT Kharagpur, payable at Kharagpur” and the bank guarantee shall remain valid for 60 days beyond the date of completion of all contractual obligation of supplier including warranty obligation for the equipment/goods.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>2.2 The amount of performance security so withheld will be discharged after the warranty period is over. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>2.3 If the contractor fails or neglects any of the bid obligations under the contract it shall be lawful for IITKGP-SRIC to forfeit either whole or any part of performance security furnished by the bidder as penalty for such failure.  </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>2.4 The proceedings of performance security shall be payable to IITKGP-SRIC as compensation for any loss resulting from Supplier/Agency’s failure to complete its obligation under the contract.  </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>2.5 The performance security bond shall be extended suitably in the event of extension of period of contract or till all obligations under the contract has been satisfied. 
*Performance Security will not be carrying any interest.
 </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>3. PAYMENT TERMS</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>100% Payment will be made on submission of all required documents (Including PBG) by the supplier/contractor after receipt and satisfactory installation (as certified by the concerned PI) of the store at the designated place in IITKGP.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>4. PRICES</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>4.1 The rates quoted for the equipment shall be for free delivery and installation at IITKGP-SRIC (designated Laboratories/Department/Centre/Schools)</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>4.2 Prices charged by the supplier for goods delivered and services performed under the contract shall not be higher than the price quoted by the supplier in his bid.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>4.3 Prices will be fixed at the time of issue of purchase order as per taxes and statutory duties applicable at that time.</Text>
  </Text>
</Page>


<Page style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >4.4 In case of reduction of taxes and other statutory duties during the scheduled delivery period, purchaser shall take the benefit of decrease in these taxes/duties for the supplies made from the date of enactment of revised duties/taxes.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >4.5 In case of increase in duties/taxes during the scheduled delivery period, the purchaser shall revise the prices as per new duties/taxes for the supplies, to be made during the remaining delivery period as per terms and conditions of the purchase order.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >4.6 Any increase in taxes and others statutory duties/levies after the expiry of scheduled delivery date or award of contract/work order shall be to the supplier account. However, benefit of any decrease in these taxes/duties shall be passed on to the purchaser by the supplier.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>5. CHANGES IN PURCHASE ORDERS</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>5.1 SRIC, IIT KGP may, at any time, by a written order given to a Supplier/ Agency, make changes within the general scope of the contract related to terms & references, enlarging the scope, analysis or specifications.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>5.2 If any such change causes an increase or decrease in the cost of, or the time required for the execution of the contract an equitable adjustment shall be made in the contract price or delivery schedule, or both, and the contract shall accordingly be amended. Any proposal by the Supplier/Agency for adjustment under this clause must be made within thirty days from the date of the receipt of the change in order.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>6. Liquidated Damage Clause</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>The Liquidated Damages shall be levied, for delay in supply beyond the contractual delivery date at the rate 0.5% per week of delay or part thereof on delayed supply of goods and/or services until actual delivery or performance subject to a maximum of 10% of the contract price of the stores the delivery of which is delayed, for each month or part of a month.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >7. As per Ministry of Finance, Deptt. of Expenditure, Public Procurement Division Order (Public Procurement No.4) issued from file No.F.7/10/2021-PPD(1) dated 23rd February, 2023 and any amendment made thereafter regarding Restrictions under Rule 144 (xi) of the General Financial Rules (GFRs) 2017, it is directed that any bidder from a country which shares a land border with India and any bidder (including an Indian bidder) who has a Specified Transfer of Technology (ToT) arrangement with an entity from a country which shares a land border with India will be eligible to bid in any procurement whether of goods, services (including consultancy services and non-consultancy services) or works (including turnkey projects) only if the bidder is registered with the Competent Authority i.e. the Deptt. for Promotion of Industry and Internal Trade (DPIIT). The said order will not apply to bidders from those countries (even sharing a land border with India) to which the Government of India has extended lines of credit or in which the Government of India is engaged in development projects (updated lists of the countries are given in the Ministry of External Affairs)</Text>
  </Text>
</Page>


<Page style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>agent, every artificial juridical person not falling in any of the descriptions of bidders stated hereinbefore, including any agency branch or office controlled by such person, participated in a procurement process.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text >“Bidders from a country which shares a land border with India” for the purpose of this Order means:</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>i. An entity incorporated, established or registered in such a country; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>ii. A subsidiary of an entity incorporated, established or registered in such a country; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>iii. An entity substantially controlled through entities incorporated, established or registered in such a country; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>iv. An entity whose beneficial owner is situated in such a country; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>v. An Indian (or other) agent of such an entity; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>vi. A natural person who is the citizen of such a country; or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>vii. A consortium or joint venture where any member of the consortium or joint venture falls under any of the above.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text >The beneficial owner for the purpose of above will be as under:</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>1. In case of a company or Limited Liability Partnership, the beneficial owner is the natural person (s), who, whether acting alone or together, or through one or more juridical person, has a controlling ownership interest or who exercise control through other means.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>Explanation- </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>a. “Controlling ownership interest” means ownership of or entitlement to more than twenty-five per cent of share or capital or profit of the company.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>b. “Control” shall include the right to appoint majority of the directors or to control the management of policy decisions including by virtue of their shareholding or management rights or shareholders agreements or voting agreements; </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>2. In case of a partnership firm, the beneficial owner is the natural person (s) who, whether acting alone or together, or through one or more juridical person, has ownership of entitlement to more than fifteen percent of capital or profits of the partnership; </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>3. In case of an unincorporated association or body of individuals, the beneficial owner is the natural person (s), who, whether acting alone or together, or through one or more juridical person, has ownership of or entitlement to more than fifteen percent of the property or capital or profits of such association or body of individuals; </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>4. Where no natural person is identified under (1) or (2) or (3) above, the beneficial owner is the relevant natural person who holds the position of senior managing official; </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>5. In case of a trust, the identification of beneficial owner(s) shall include identification of the author of the trust, the trustee, the beneficiaries with fifteen percent or more interest in the trust and any other natural person exercising ultimate effective control over the trust through a chain of control or ownership. </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>An agent is a person employed to do any act for another, or to represent another in dealings with the third person.  </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>For Works contracts, including Turnkey contracts, the successful bidder shall not be allowed to sub-contract works to any contractor from a country which shares a land border with India unless such contractor is registered with the Competent Authority.  </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:3,  fontSize:11.5}}>
    <Text style={{fontWeight:'normal'}}>A certificate shall be submitted by bidders in the tender documents regarding their compliance with the said order. If the certificate submitted by a bidder whose bid is accepted is found to be false, this would be a ground for immediate termination and further legal action in accordance </Text>
  </Text>
  {/* Continue formatting for points 2 to 5 */}
</Page>


<Page style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >with law. Section XIII (For Goods/ Services contracts)/ Section XIV (For Works contracts, including Turnkey contracts) </Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>8.It is mandatory for bidders to quote items having local content more than 20%. Refer revised Public Procurement (Preference to Make in India), Order 2017 P-45021/2/2017-B.E-II dated 04.06.2020 issued by DPIIT, Ministry of Commerce and Industry, Govt. of India. (Submit duly filled Section-XI for the same)</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>9. FORCE MAJEURE</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>9.1 If, at any time, during the continuance of this contract, the performance in whole or in part by either party of any obligation under this contract is prevented or delayed by reasons of any war, or hostility, acts of the public enemy, civil commotion, sabotage, fires, floods, explosions, epidemics, quarantine restrictions, strikes, lockouts, or act of God (hereinafter referred to as events) provided notice of happenings of any such eventuality is given by either party to the other within 21 days from the date of occurrence thereof, neither party shall by reason of such event be entitled to terminate this contract nor shall either party have any claim for damages against other in respect of such non-performance or delay in performance, and deliveries under the contract shall be resumed as soon as practicable after such an event come to an end or cease to exist, and the decision of SRIC, IIT KGP as to whether the deliveries have been so resumed or not shall be final and conclusive. Further that if the performance in whole or part of any obligation under this contract is prevented or delayed by reasons of any such event for a period exceeding 60 days, either party may, at its option, terminate the contract.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>9.2 Provided, also that if the contract is terminated under this clause, SRIC, IIT KGP shall be at liberty to take over from the contractor at a price to be fixed by SRIC, IIT KGP, which shall be final, all unused, undamaged and acceptable materials, bought out components and stores in course of manufacture which may be in possession of the contractor at the time of such termination or such portion thereof as SRIC, IIT KGP may deem fit, except such materials, bought out components and stores as the contractor may with the concurrence of SRIC, IIT KGP elect to retain.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>10. TERMINATION FOR DEFAULT</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>10.1 SRIC, IIT KGP may, without prejudice to any other remedy for breach of contract, by written notice of default, sent to the Supplier/ Agency, terminate this contract in whole or in part,</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>a) If the Supplier/ Agency fails to deliver satisfactorily any or all of the goods & services within the time period (s) specified in the contract, or any extension thereof granted by IIT KGP-SRIC.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>b) If the Supplier/ Agency fails to perform any other obligation(s) under the Contract;</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>and</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>c) If the Supplier/ Agency, in either of the above circumstances, does not remedy his failure within a period of 15 days (or such longer period as SRIC, IIT KGP may authorize in writing) after receipt of the default notice from SRIC, IIT KGP.</Text>
  </Text>
</Page>

<Page style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text >10.2 In the event SRIC, IIT KGP terminates the contract in whole or in part to SRIC, IIT KGP may procure, upon such terms and in such manner as it deems appropriate, services similar to those undelivered and the Supplier/Agency shall be liable to SRIC, IIT KGP for any excess cost for such similar supplies. However, the Supplier/Agency shall continue the performance of the contract to the extent not terminated.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>11. REJECTION:</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>In the event that any of the stores supplied by the Contractor is found defective in material or workmanship or otherwise not in conformity with the requirements of the Contract specifications, the purchaser shall either reject the stores or request the Contractor, in writing, to rectify the same. The Contractor, on receipt of such notification, shall either rectify or replace the defective stores free of cost to the purchaser. If the Contractor fails to do so, the purchaser may at his option either –</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>a) replace or rectify such defective stores and recover the extra cost so involved from the Contractor, or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>b) terminate the Contract for default as provided under clause 8 above, or</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>c) acquire the defective stores at a reduced price considered equitable under the circumstances. The provision of this article shall not prejudice the Purchaser's rights</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>12. REPLACEMENT:</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>If the stores or any portion thereof is damaged or lost during transit, the Purchaser shall give notice to the Contractor setting forth particulars of such stores damaged or lost during transit. The replacement of such stores shall be effected by the Contractor within a reasonable time to avoid unnecessary delay in the intended usage of the Stores. In case the purchaser agrees, the price towards replacement items shall be paid by the purchaser on the basis of original price quoted in the tender or as reasonably worked out from the tender.</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'bold'}}>13. TERMINATION FOR INSOLVENCY</Text>
  </Text>
  <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
    <Text style={{fontWeight:'normal'}}>SRIC, IIT KGP may at any time terminate the Contract by giving written notice to the Supplier/ Agency, without compensation to the Supplier/ Agency. If the Supplier/ Agency becomes bankrupt or otherwise insolvent as declared by the competent court provided that such termination will not prejudice or affect any right of action or remedy which has accrued or will accrue thereafter to SRIC, IIT KGP.</Text>
  </Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>

<Text style={{textAlign: 'center', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'bold'}}>SECTION - IV</Text>
</Text>
<Text style={{textAlign: 'center', margin:5,  fontSize:12}}>
  <Text >Special conditions of the Contract:</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>1. The special conditions of the contract shall supplement the 'Instructions to the Bidders' as contained in Section II & 'General Conditions of the Contract' as contained in Section III and wherever there is a conflict, the provisions herein shall prevail over those in Section II and Section III.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>2. If the date fixed for opening of bids is subsequently declared as holiday by the Government of India, the revised schedule will be notified. However, in absence of such notification, the bids will be opened on next working day, time and venue remaining unaltered.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>3. Purchaser reserves the right to disqualify such bidders who have a record of not meeting contractual obligations against earlier contracts entered into with the purchaser.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>4. Any clarification issued by purchaser in response to query raised by prospective bidders shall form an integral part of bid documents and it may amount to amendment of relevant clauses of the bid documents.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>5. Purchaser reserves the right to blacklist a bidder for a suitable period in case he fails to honour his bid as per bid declaration form.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>6. The bidder has to arrange demonstration of the product to be supplied at his own cost.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>7. The Agency shall be responsible for compliance of all applicable laws, codes, statutory Regulations & established practice as required for performance of services under this contract. Whether now in force or which may hereinafter come in force during the currency of the contract and or extension thereof.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>8. Bids with false declarations regarding Local contents shall be rejected as responsive, in addition to punitive actions under the MII orders and for violating the Code of Integrity as per the Tender Document.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'bold'}}>9. Invoices should be in the name of The Dean (R&D), IIT Kharagpur, Kharagpur-721302, Dist: Paschim Medinipur, West Bengal, India.</Text>
</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Tender No. :- ………………………………… &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;Date with Company Seal</Text>
</Text>

<Text style={styles.section}><Text style={{textDecoration: 'underline'}}>
  SECTION – V</Text></Text>


<Text style={styles.section}>
  DETAILED TECHNICAL SPECIFICATIONS</Text>


<Text style={styles.section}><Text style={{textDecoration: 'underline'}}>
  Name of the Equipment</Text></Text>

<Text style={styles.section}><Text style={{textDecoration: 'underline'}}>
  Quantity – 01 No.</Text></Text>

<Text style={styles.section}><Text style={{textDecoration: 'underline'}}>
  (Techno-Commercial Terms and Conditions to be submitted by the vendor/firm on its official letter head)</Text></Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}><Text style={{textDecoration: 'underline'}}>Techno-Commercial Terms & Conditions:</Text></Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>&nbsp;&nbsp;1. Prices (quoted in INR)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOR IIT Kharagpur</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>&nbsp;&nbsp;2. Payment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Should be clearly mentioned, as per payment terms</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>&nbsp;&nbsp;3. Validity of the quotation &nbsp;:</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>&nbsp;&nbsp;4. Delivery Period&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>&nbsp;&nbsp;5. Warranty &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comprehensive onsite warranty for one (01) year</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>&nbsp;&nbsp;6. Order to be placed to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M/s. _________________________________</Text>
  <Text style={{fontWeight:'normal'}}>_____________________________________</Text>
  
</Text>

<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{textAlign: 'right'}}>Signature________________</Text>
  <Text style={{textAlign: 'right'}}>Name___________________</Text>
  <Text style={{textAlign: 'right'}}>Designation______________</Text>
  <Text style={{textAlign: 'right'}}>Seal of the firm/organization</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text> <Text style={{fontWeight:'bold'}}>Indian Institute of Technology Kharagpur invites online Bids (Technical bid and Commercial bid) from all domestic manufacturer having registered office in India and experienced OEM (Original Equipment Manufacturer) OR OEM Authorized Dealer</Text></Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text> <Text style={{fontWeight:'bold'}}>A complete set of tender documents may be Download by prospective bidder free of cost from the website</Text> http://eprocure.gov.in/eprocure/app. Bidder has to make payment of requisite fees (i.e. Tender fees, if any and EMD) in the form of D.D*/Pay Order*/Insurance Surety bonds/Fixed Deposit Receipt*/Bank Guarantee /Banker’s Cheque from any of the commercial bank or payment online (RTGS/NEFT) in an acceptable form only.</Text>
</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Tender No. :- ………………………………… &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date with Company Seal</Text>
</Text>

<Text style={styles.section}><Text style={{textDecoration: 'underline'}}>
  Section - VI</Text></Text>

  <Text style={styles.section}>TECHNICAL BIDS</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Specification of the equipment / item (in detail) to be purchased</Text>
</Text>

<table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid black'}}>
  <tr>
    <th style={{border: '1px solid black'}}>Details of Technical Specifications</th>
    <th style={{border: '1px solid black'}}>Whether complied with<br/>YES/NO</th>
    <th style={{border: '1px solid black'}}>If yes, please attach Tech literature of the equipment duly printed & clearly specify page No of Bulletin which specifically confirm this<br/>If no, attach deviation statement</th>
    <th style={{border: '1px solid black'}}>If no, attach deviation statement</th>
    <th style={{border: '1px solid black'}}>Remarks (if any)</th>
  </tr>
  <tr>
    <td style={{border: '1px solid black'}}>xxxxxxxxxxxxxxxxxxx</td>
    <td style={{border: '1px solid black'}}>xxxxxxxxxxxxx</td>
    <td style={{border: '1px solid black'}}>xxxxxxxxxxxx</td>
    <td style={{border: '1px solid black'}}>xxxxxxxxxxxxx</td>
    <td style={{border: '1px solid black'}}>xxxxxxxxxxxxxxx</td>
  </tr>
</table>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text><Text style={{fontWeight:'normal'}}>Note:</Text> Please indicate the page numbers where documents uploaded/attached. The entire tender document should be serially page numbered including enclosures.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text>N.B.: - 1. All the bidders are requested to provide true statement in the columns. Concealing of facts will liable to be rejected the tender completely. No communication will be made in this regard.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text>2. Category of classification of the goods in its packing as per IATA definition inclusive of nature of sensitivity and volume of cargo.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text>3. Separate page, if required may be used for the stated information with same format.</Text>
</Text>

<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text>Signature of Tenderer with office seal</Text>
</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>

<Text style={styles.section}>
  <Text style={{fontWeight:'bold'}}><Text style={{textDecoration: 'underline'}}>SECTION - VII</Text></Text>
</Text>
<Text style={styles.section}>
  Price BID DECLARATION</Text>

<Text style={{fontWeight:'bold' ,fontSize:12}}>No. IIT/SRIC/Dept. Code/Project Code/PI(Short)/23‐24/EQ‐  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: __/__/____</Text>
<Text style={{fontSize:13}}>To</Text>
<Text style={{fontWeight:'bold' ,fontSize:12}}>Prof./Dr. Name of the PI,</Text>
<Text style={{fontWeight:'bold' ,fontSize:12}}>Name of the Department</Text>
<Text style={{fontSize:12}}>Indian Institute of Technology Kharagpur</Text>
<Text style={{fontSize:12}}>P.O.: Kharagpur, Dist: Medinipur (West)</Text>
<Text style={{fontSize:12}}>Kharagpur - 721302</Text>
<Text style={{fontSize:12}}>Dear Sir,</Text>



<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Having examined the conditions of contract and specifications including addenda Nos. (If any) the receipt of which is hereby duly acknowledged, we, undersigned, offer to provide as per tender terms and conditions in conformity with the supply of the equipment, conditions of contract and specifications for the sum shown as per Section V, Section VI and price as per BOQ.xls format under Financial Cover and made part of this Bid. </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>We undertake, if our Bid is accepted, to commence deliveries within schedule time frame and to complete delivery of all the supplies specified in the contract within as per schedule calculated from the date of issue of your purchase order/RO.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>If our Bid is accepted, we will obtain the performance guarantees of a Scheduled Bank for 10% of the cost of equipment. </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>We agree to abide by this Bid for a period of 90 days from the date fixed for Bid opening and it shall remain binding upon us and may be accepted at any time before the expiration of that period. </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Until a formal Purchase Order of Contract is prepared and executed, this Bid together with your written acceptance thereof in your notification of award shall constitute a binding contract between us. </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>We understand that you are not bound to accept the lowest or any bid, you may receive. </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>We have applied and have submitted required bid security as per clause 8, section II of tender document.</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Dated this .............................. day of ........................ 2023 </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Name and Signature ……………………………………….</Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>In the capacity of …………………………………………….</Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Duly authorized to sign the bid for and on behalf of ............................................. </Text>
</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
<Text style={{fontWeight:'bold' ,fontSize:12}}>No. IIT/SRIC/Dept. Code/Project Code/PI(Short)/23‐24/EQ‐  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: __/__/____</Text>
<Text style={styles.section}><Text style={{textDecoration: 'underline'}}>
  Section - VII</Text></Text>

  <Text style={styles.section}>PERFORMANCE SECURITY GUARANTEE BOND</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal', fontSize:12}}>
In consideration of Indian Institute of Technology Kharagpur, (SRIC) (herein after called the “SRIC, IIT KGP”) having agreed to exempt ___________________ (hereinafter called “the said contractor(s)’) from the demand under the terms and conditions of an agreement/(Purchase Order) No ________________ dated ____________ made between _____________________ and __________________ for _____________________________ for the supply of _______________________ (hereinafter called “the said agreement ”), of security deposit for the due fulfilment by the said contractor (s) of the terms and conditions contained in the said Agreement, on production of the bank guarantee for ____________________________________________________we, (name of the bank) _________________________ (hereinafter refer to as “the bank”) at the request of ___________________________________ (contractor(s)) do hereby undertake to pay to SRIC, IIT KGP an amount not exceeding ___________________ against any loss or damage caused to or suffered or would be caused to or suffered by the government by reason of any breach by the said Contractor(s) of any of the terms or conditions contained in the said Agreement or any reason of the contracts failure to perform said Agreement. 


</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal', fontSize:12}}>2. We (name of the bank) ____________________ do hereby undertake to pay the amounts due and payable under this guarantee without any demure, merely on a demanded from SRIC, IIT KGP stating that the amount claimed is due by way of loss or damage caused to or would be caused to or suffered by SRIC, IIT KGP by reason of breach by the said contractor(s)’ of any of the terms or conditions contained in the said Agreement or by reason of the contractors(s)’ failure to perform the said Agreement or roll out the supply as per schedule V & parameters for failure of compliance of intellectuals property rights. Any such demand made on the bank shall be conclusive as regards the amount due and payable by the Bank under this guarantee where the decision of SRIC, IIT KGP in these counts shall be final and binding on the bank. However, our liability under this guarantee shall be restricted to an amount not exceeding ___________________________________.  

</Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal', fontSize:12}}>3. We undertake to pay to SRIC, IIT KGP any money so demanded not withstanding any dispute or disputes raised by the contractor(s)/Supplier/ Agency(s) in any suit or proceeding pending before any court or tribunal relating thereto our liability under this present being absolute and unequivocal. The payment so made by us under this bond shall be valid discharge of our liability for payment there under and the contractor(s)/Supplier/ Agency(s) shall have no claim against us for making such payment. 
 </Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal', fontSize:12}}>4. We (name of the bank) _________________________ further agree that the guarantee herein contained shall remain in full force and effect during the period that would be taken for the performance of the said agreement and that it shall continue to be enforceable till all the dues of SRIC, IIT KGP under or by virtue of the said Agreement have been fully paid and its claims satisfied or discharged or till expiry of 90 days beyond the date on which the warranty period of the equipment(s) expire.
 </Text>
 </Text>
 <Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal', fontSize:12}}>5. We (name of the bank)_________________________ further agree with SRIC, IIT KGP that SRIC, IIT KGP shall have the fullest liberty without our consent and without affecting in any manner our obligations there under to vary any of the terms and conditions of the said Agreement or to extend time of performance by the said contractor(s) from time to time or to postpone for any time or from time to time any of the powers exercisable by SRIC, IIT KGP against the said Contractor(s) and to forbear or enforce any of the terms and conditions relating to the said agreement and we shall not be relieved from our liability by reason of any such variation, or extension being granted to the said Contractor(s) or for any forbearance, act or omission on the part of SRIC, IIT KGP or any indulgence by IIT KGP-SRIC to the said Contractor(s) or by any such matter or thing whatsoever which under the law relating to sureties would, but for this provision, have effect of so relieving us. 




 
 </Text>

</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal', fontSize:12}}>

6. We (name of the bank) ____________________ lastly undertake not to revoke this guarantee during its currency except with the previous consent of SRIC, IIT KGP in writing. 
Dated the ________________ day of _______ for __________________________________ 


 
 </Text>

</Text>
</Page>



<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
<Text style={styles.section}>
  <Text style={{fontWeight:'bold'}}><Text style={{textDecoration: 'underline'}}>SECTION - IX</Text></Text>
</Text>
<Text style={styles.section}>
  <Text style={{fontWeight:'bold'}}>Bid Security/EMD Details Proforma</Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal', fontSize:12}}>Date: __/__/____ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tender No. IIT/SRIC/Dept. Code/Project Code/PI(Short)/23‐24/EQ‐</Text>
</Text>



<Text style={{fontSize:12}}>The EMD of Rs………………. has been deposited in the Bank Account Number 95562200002545, Name of the Bank: Canara Bank, Branch: SRIC IIT Kharagpur, IFSC Code : CNRB0019556 . Details are given below.</Text>

<Text style={styles.section}>
  <Text style={{fontWeight:'bold'}}><Text style={{textDecoration: 'underline'}}>For Online only (RTGS/NEFT)</Text></Text>
</Text>


<Text style={styles.section}>
  <Text style={{fontWeight:'bold'}}><Text style={{textDecoration: 'underline'}}>For Offline only (in favour of the IIT KHARAGPUR and Payable at KHARAGPUR)</Text></Text>
</Text>


<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Note: Scan copy of D.D*/Pay Order* /Insurance Surety bonds/Fixed Deposit Receipt*/Bank Guarantee /Banker’s Cheque to be attached in the tender documents.
</Text>
</Text>
<Text style={{fontSize:14, fontWeight:"bold"}}>Note:</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>In case of MSME where the EMD is Exempted, IIT Kharagpur will give exemption for submission of Tender Fee and EMD to the bidders, who are registered with MSME or Central Purchase Organization or start-ups as recognized by DIPP as per revised rule 170 of GFR-2017 only. However, proper and valid documents in this regard must be submitted by the bidders in support of their claim.</Text>
</Text>
<Text style={styles.section}>
  <Text style={{fontWeight:'normal'}}>Certificate for MSME etc. should be uploaded, failing which bid will be rejected.</Text></Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>In case the bid is submitted as an Indian arm of a foreign bidder and the eligibility criteria conditions were met through foreign company, then the EMD exemption cannot be claimed under the MSME status of India arm/subsidiary. Thus a bidder who solely on its own, fulfils each eligibility criteria condition as per the tender terms and conditions and who are having MSE status, can claim EMD exemption/tender fee. </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>IN WITNESS WHEREOF, I/We have hereunto set my/our hand/s this ____ day of [month] [year] at [place of execution]. </Text>
</Text>


<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>                                                                                                        [Insert NAME OF BIDDER’S           </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>AUTHORIZED REPRESENTATIVE]       </Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>[Insert signatory’s legal capacity] Affiant</Text>
</Text>

</Page>

<Page size="A4" style={styles.body}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
      <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
      <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>
      <Text style={{textAlign: 'center', margin:20,  fontSize:11.5}}>PARTICULARS FOR REFUND OF EMD TO SUCCESSFUL/UNSUCESSFUL BIDDER</Text>
      <Text style={{textAlign: 'center', margin:20,  fontSize:11.5}}>RTGS/National Electronic Fund Transfer (NEFT) Mandate Form</Text>
      <View style={styles.table}>
        {/* Table header */}
        <View style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberHeader}><Text style={styles.tableCellHeader}>Sl. No.</Text></View>
        <View style={styles.sectionHeader}><Text style={styles.tableCellHeader}>Section</Text></View>
        <View style={styles.titleheader}><Text style={styles.tableCellHeader}>Title</Text></View>
        <View style={styles.pageHeader}><Text style={styles.tableCellHeader}>Page No</Text></View>
      </View>
      {/* Table data rows will go here */}
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>01</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section I</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Notice Inviting Tender & List of Equipment</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>02</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section IA</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Time schedule of Tender</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>03</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section II</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Instructions to Bidders and General terms and Conditions</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>04</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section III</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>General (Commercial) Conditions of Contract</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>05</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section IV</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Special Conditions of the Contract</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>06</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section V</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Schedule of Requirements with Techno-Commercial Terms</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>07</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section VI</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Proforma for Technical Bid</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>08</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section VII</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Price Bid Declaration</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>09</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section VIII</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Performance Security Guarantee Bond</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>10</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section IX</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Bid Security/ EMD Details Proforma</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>11</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section X</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Undertaking</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>12</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section XI</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Self-certificate for Local Content 
(Preference to make in India for price preference)
</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>13</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section XII</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>OEM Authorization</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>14</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section XIII</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>(For Goods/ Services Contracts)
Certificate - Bidder Not from/ from Country sharing Land border with India & Registration of Bidder with Competent Authority
</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>15</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section XIV</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>(For Works Contracts, including Turnkey Contracts)
Certificate – Bidder Not from/ from Country sharing Land border with India, Registration of Bidder with Competent Authority & not sub-contract any work to a contractor from such countries unless such contractor is registered with the Competent Authority
</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
      
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>16</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Section XV</Text></View>
        <View style={styles.titleCol}><Text style={styles.tableCell}>Checklist for the Tenderer</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View>
      </View>
    </View>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      <Text style={styles.signature}>Signature of the Tenderer/ Date with Seal</Text>
      
      
    </Page>


    
<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>

<Text style={styles.section}>
  <Text style={{fontWeight:'bold'}}><Text style={{textDecoration: 'normal'}}>Bid Security Self Declaration Form
</Text></Text>
</Text>


<Text style={{fontWeight:'bold' ,fontSize:12,  margin:5}}>No. IIT/SRIC/Dept. Code/Project Code/PI(Short)/23‐24/EQ‐  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: __/__/____</Text>
<Text style={{fontSize:13,  margin:5}}>To</Text>
<Text style={{fontWeight:'bold' ,fontSize:12,  margin:5}}>The Dean (R&D) </Text>
<Text style={{fontWeight:'bold' ,fontSize:12,  margin:5}}>Indian Institute of Technology Kharagpur
</Text>
{/* <Text style={{fontSize:12}}>Sponsored Research and Industrial Consultancy</Text> */}
<Text style={{fontSize:12,  margin:5}}>P.O.: Kharagpur, Dist: Medinipur (West)</Text>
<Text style={{fontSize:12 ,  margin:5}}>Kharagpur - 721302</Text>
<Text style={{fontSize:12 ,  margin:5}}>I/We The undersigned, declare that:</Text>



<Text style={{textAlign: 'left', margin:8,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>I/We understand that, according to your conditions, bids must be supported by a Bid Security Declaration.
 </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>I/We accept that I/We may be disqualified from bidding for any contract with the Indian Institute of Technology Kharagpur for a period of 1 (one) year from the date of notification if I am /We are in a breach of any obligation under the bid conditions, because I/We

</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> a. have withdrawn/modified/amended, impairs or derogates from the tender, my/our Bid during the period of bid validity specified in the form of Bid; or
 </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>b. having been notified of the acceptance of our Bid by the purchaser during the period of bid validity (i) fail or reuse to execute the contract, if required, or (ii) fail or refuse to furnish the Performance Security, in accordance with the Instructions to Bidders.
</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>I/We understand this Bid Security Declaration shall cease to be valid if I am/we are not the successful Bidder, upon the earlier of (i) the receipt of your notification of the name of the successful Bidder; or (ii) thirty days after the expiration of the validity of my/our Bid.
</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>We understand that you are not bound to accept the lowest or any bid, you may receive. </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>IN WITNESS WHEREOF, I/We have hereunto set my/our hand/s this ____ day of [month] [year] at [place of execution].
</Text>
</Text>

<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> [Insert NAME OF BIDDER’S </Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>AUTHORIZED REPRESENTATIVE] </Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> [Insert signatory’s legal capacity] Affiant
 </Text>
</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>


<Text style={{fontSize:12,  margin:5}}>Tender No. :- .......................................</Text>

<Text style={{textAlign: 'center',fontSize:12,  margin:5}}>SECTION X
 </Text>
<Text style={{fontWeight:'center' ,fontSize:12,  margin:5}}>UNDERTAKING
</Text>
{/* <Text style={{fontSize:12}}>Sponsored Research and Industrial Consultancy</Text> */}
<Text style={{fontSize:12,  margin:5}}>I hereby undertake and declare that the agency M/S...................................................................... have not been black listed by any Government Organizations, autonomous bodies, Department of Government of India and Department of Government of West Bengal and any others State Government in India.
</Text>


<Text style={{textAlign: 'right', margin:8,  fontSize:12}}>
  <Text style={{fontWeight:'bold'}}>Signature of the Authorized Persons..........................................

 </Text>
</Text>

<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'bold'}}>Name & Seal of the Company


</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'bold'}}> Date:
 </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'bold'}}>Place:
</Text>
</Text>
</Page>

<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>


<Text style={{fontSize:12,  margin:5}}>Tender No. :- .......................................</Text>

<Text style={{textAlign: 'center',fontSize:12,  margin:5}}>SECTION XI
 </Text>
<Text style={{fontWeight:'center' ,fontSize:12,  margin:5}}>Self-Certificate for Local Content
</Text>
{/* <Text style={{fontSize:12}}>Sponsored Research and Industrial Consultancy</Text> */}
<Text style={{fontSize:12,  margin:5}}>A. *We [name of manufacturer] hereby confirm in respect of quoted item(s) that Local Content is equal to or more than 50% and come under ‘Class-I Local Supplier’ Category. The percentage of local content is_____	_. As being ‘Class-I Local Supplier’, we are eligible for Purchase Preference under ‘Make in India’ Policy vide GoI Order no. P- 45021/2/2017-PP (B.E.-II) dated 16th September, 2020. The stated local content shall not include the services such as transportation, insurance, installation, commissioning, training and after sales service support like AMC/CMC etc. as local value addition.
</Text>
<Text style={{fontWeight:'center' ,fontSize:12,  margin:5}}>OR
</Text>
<Text style={{fontSize:12,  margin:5}}>*We [name of manufacturer] hereby confirm in respect of quoted item(s) that Local Content is more than 20% but less than 50% and come under ‘Class-II Local Supplier’ Category. The percentage of local content is	_______. The stated local content shall not include the services such as transportation, insurance, installation, commissioning, training and after sales service support like AMC/CMC etc. as local value addition
</Text>
<Text style={{fontSize:12,  margin:5}}>* Strike out whichever is not applicable
</Text>

<Text style={{fontSize:12,  margin:5}}>B. The details of the location(s) at which the local value addition made is/are as under: 
</Text>
<Text style={{fontSize:12,  margin:5}}>1………………………………………………………………………
</Text>
<Text style={{fontSize:12,  margin:5}}> 2……………………………………………………………………….
</Text>
<Text style={{fontSize:12,  margin:5}}> 3……………………………………………………………………….
</Text>
<Text style={{fontSize:12,  margin:5}}>C. Country of Origin  	_____________________________________
</Text>
<Text style={{textAlign:'left',fontSize:12,  margin:5}}>Date:
</Text>
<Text style={{textAlign:'right',fontSize:12,  margin:5}}>Seal & Signature of Bidder
</Text>
<Text style={{fontSize:12,  margin:5}}>Note: Clarification for local content calculation as per OM No. P-45021/102/2019/BE-II-Part (1) (E-50310), dated March 4, 2021 of Government of India, Ministry of Commerce and Industry, Department of Promotion of Industry and Internal Trade, Public Procurement Section.
</Text>
</Page>



<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>


<Text style={{fontWeight:'bold' ,fontSize:12,  margin:5}}>Tender No. :-............................. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date with Company Seal</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>SECTION XII</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>ORIGINAL EQUIPMENT MANUFACTURER (OEM)
</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>Manufacturing authorisation form (MAF)
</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>(On Letter Head of Manufacturer)
</Text>

<Text style={{fontSize:13,  margin:5}}>To</Text>
<Text style={{fontWeight:'bold' ,fontSize:12,  margin:5}}>The Dean (R&D) </Text>
<Text style={{fontWeight:'bold' ,fontSize:12,  margin:5}}>Indian Institute of Technology Kharagpur
</Text>
<Text style={{fontSize:12,  margin:5}}>Sponsored Research and Industrial </Text>
<Text style={{fontSize:12,  margin:5}}>Consultancy</Text>
{/* <Text style={{fontSize:12}}>Sponsored Research and Industrial Consultancy</Text> */}
<Text style={{fontSize:12,  margin:5}}>P.O.: Kharagpur, Dist: Medinipur (West)</Text>
<Text style={{fontSize:12 ,  margin:5}}>Kharagpur - 721302</Text>
<Text style={{fontSize:12 ,  margin:8}}>Dear Sir,</Text>



<Text style={{textAlign: 'left', margin:8,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>We	manufactures	of	original equipment at (…………………………..address of factory……………………………) do hereby authorize M/s (Name and address of Agent) to submit a bid, negotiate and receive the order against your tender enquiry.
 </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>M/s. …………………………………….. is authorized to bid and conclude the contract in regard to this business.
</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> We hereby extend our full guarantee and warranty as per clause ………………………… of the terms and conditions NIT for the goods and services offered by the above firm.
 </Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Yours Faithfully,
</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>(Name)
</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>(Name & Seal of Manufactures)
</Text>
</Text>

<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Note: -
</Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>1. In cases of agents quoting in offshore procurements, on behalf of their principal manufacturers, one agent cannot represent two manufacturers or quote on their behalf in a particular tender enquiry. One manufacturer can authorize only one agent/dealer
</Text>
</Text>
<Text style={{textAlign: 'left', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>2. The letter of authority should be on the letterhead of the manufacturer and should be signed by a person competent and having the power of attorney to bind the manufacturer. The same should be included by the bidder in its techno-commercial unpriced bid.
</Text>
</Text>

<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> [Insert NAME OF BIDDER’S </Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>AUTHORIZED REPRESENTATIVE] </Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> [Insert signatory’s legal capacity] Affiant
 </Text>
</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
<Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
<Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>


<Text style={{fontWeight:'bold' ,fontSize:12,  margin:5}}>Tender No. :-............................. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date with Company Seal</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>SECTION XIII</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>On Organization Letter Head
</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>(For Goods/ Services Contracts)
</Text>
<Text style={{textAlign:'center',fontSize:13,  margin:5}}>CERTIFICATE
</Text>

{/* <Text style={{fontSize:13,  margin:5}}>To</Text> */}
<Text style={{fontSize:12,  margin:5}}>I have read the clause related to insertion of Rule 144 (xi) in the General Financial Rules 2017 vide O.M No.F.7/10/2021-PPD(1) dated 23rd February, 2023 (Public Procurement No.4) and any amendment made thereafter of the Ministry of Finance regarding restrictions on procurement from a bidder of a country which shares a land border with India and hereby certify that this bidder is not from such a country.
</Text>
<Text style={{textAlign:'center',fontSize:12,  margin:5}}>OR (whichever is applicable)
</Text>
<Text style={{fontSize:12,  margin:5}}>I have read the clause related to insertion of Rule 144 (xi) in the General Financial Rules 2017 vide O.M No.F.7/10/2021-PPD(1) dated 23rd February, 2023 (Public Procurement No.4) and any amendment made thereafter of the Ministry of Finance regarding restrictions on procurement from a bidder of a country which shares a land border with India and hereby certify that this bidder is from _____________	(Name of Country) and has been registered with the Competent Authority. I also certify that this bidder fulfills all the requirements in this regard and is eligible to be considered. (Copy/ evidence of valid registration by the Competent Authority is to be attached)
 </Text>
<Text style={{textAlign:'center',fontSize:12,  margin:5}}>AND</Text>
{/* <Text style={{fontSize:12}}>Sponsored Research and Industrial Consultancy</Text> */}
<Text style={{fontSize:12,  margin:5}}>I have read the clause regarding restriction on procurement from a bidder having Transfer of Technology (ToT) arrangement. I certify that this bidder does not have any ToT arrangement requiring registration with the competent Authority
</Text>
<Text style={{textAlign:'center',fontSize:12 ,  margin:5}}>OR (whichever is applicable)</Text>
<Text style={{fontSize:12 ,  margin:8}}>I have read the clause regarding restrictions on procurement from a bidder having Transfer of Technology (ToT) arrangement. I certify that this bidder has valid registration to participate in this procurement.
</Text>
<Text style={{fontSize:12 ,  margin:8}}>We also understand, false declarations will be in breach of the Code of Integrity under Rule 175(1)(i)(h) of the General Financial Rule for which a bidder or its successors can be debarred for up two years as per Rule 151 (iii) of the General Financial Rules along with such other actions as may be permissible under law.
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> Signature of Bidder/ Agent
</Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}>Name: ______________________________
 </Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> Designation: ______________________________
 </Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> Organization Name: ______________________________
 </Text>
</Text>
<Text style={{textAlign: 'right', margin:5,  fontSize:12}}>
  <Text style={{fontWeight:'normal'}}> Contact No. : ______________________________
 </Text>
</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
  <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>

  <Text style={{ fontWeight: 'bold', fontSize: 12, margin: 5 }}>
    Tender No. :- ………………………………… &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date with Company Seal
  </Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>SECTION XIII</Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>(On Organization Letter Head)</Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>(For Goods/ Services Contracts)</Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>CERTIFICATE</Text>

  <Text style={{ fontSize: 12, margin: 5 }}>I have read the clause related to insertion of Rule 144 (xi) in the General Financial Rules 2017 vide O.M No.F.7/10/2021-PPD(1) dated 23rd February, 2023 (Public Procurement No.4) and any amendment made thereafter of the Ministry of Finance regarding restrictions on procurement from a bidder of a country which shares a land border with India and hereby certify that this bidder is not from such a country.</Text>
  <Text style={{textAlign:'center', fontSize: 12, margin: 5 }}>OR (whichever is applicable)</Text>
  <Text style={{ fontSize: 12, margin: 5 }}>I have read the clause related to insertion of Rule 144 (xi) in the General Financial Rules 2017 vide O.M No.F.7/10/2021-PPD(1) dated 23rd February, 2023 (Public Procurement No.4) and any amendment made thereafter of the Ministry of Finance regarding restrictions on procurement from a bidder of a country which shares a land border with India and hereby certify that this bidder is from _____________ (Name of Country) and has been registered with the Competent Authority. I also certify that this bidder fulfills all the requirements in this regard and is eligible to be considered. (Copy/ evidence of valid registration by the Competent Authority is to be attached)</Text>
  <Text style={{textAlign:'center', fontSize: 12, margin: 5 }}>AND</Text>
  <Text style={{ fontSize: 12, margin: 5 }}>I have read the clause regarding restriction on procurement from a bidder having Transfer of Technology (ToT) arrangement. I certify that this bidder does not have any ToT arrangement requiring registration with the competent Authority.</Text>
  <Text style={{textAlign:'center', fontSize: 12, margin: 5 }}>OR (whichever is applicable)</Text>
  <Text style={{ fontSize: 12, margin: 5 }}>I have read the clause regarding restrictions on procurement from a bidder having Transfer of Technology (ToT) arrangement. I certify that this bidder has valid registration to participate in this procurement.</Text>
  <Text style={{ fontSize: 12, margin: 5 }}>We also understand, false declarations will be in breach of the Code of Integrity under Rule 175(1)(i)(h) of the General Financial Rule for which a bidder or its successors can be debarred for up two years as per Rule 151 (iii) of the General Financial Rules along with such other actions as may be permissible under law.</Text>

  <Text style={{ textAlign: 'right', fontSize: 12, margin: 5 }}>Signature of Bidder/ Agent</Text>
  <Text style={{ textAlign: 'right', fontSize: 12, margin: 5 }}>Name: ______________________________</Text>
  <Text style={{ textAlign: 'right', fontSize: 12, margin: 5 }}>Designation: ______________________________</Text>
  <Text style={{ textAlign: 'right', fontSize: 12, margin: 5 }}>Organization Name: ______________________________</Text>
  <Text style={{ textAlign: 'right', fontSize: 12, margin: 5 }}>Contact No. : ______________________________</Text>
</Page>


<Page size="A4" style={styles.MY}>
<Image
    style={{ width: 100, height: 80, alignSelf: 'center' }} // Adjust sizing and positioning as needed
    src={require('./Logo-black.png')} // Adjust the path if the image is in a different directory
  />
  <Text style={styles.title}>Indian Institute of Technology Kharagpur</Text>
  <Text style={styles.title}>Sponsored Research and Industrial Consultancy</Text>

  <Text style={{ fontWeight: 'bold', fontSize: 12, margin: 5 }}>
    Tender No. :- ………………………………… &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date with Company Seal
  </Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>SECTION XV</Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>TENDER DOCUMENT FOR PURCHASE OF (Name of the Equipment)</Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>TENDER NO. IIT/SRIC/Dept. Code/Project Code/PI(Short)/23-24/EQ‐</Text>
  <Text style={{ textAlign: 'center', fontSize: 13, margin: 5 }}>CHECKLIST FOR THE TENDERER</Text>


      <View style={styles.table}>
        {/* Table header */}
        <View style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberHeader}><Text style={styles.tableCellHeader}>Name and Address of the Tenderer:</Text></View>
        <View style={styles.sectionHeader}><Text style={styles.tableCellHeader}>List of Equipment Quoted</Text></View>
        {/* <View style={styles.titleheader}><Text style={styles.tableCellHeader}>Title</Text></View> */}
        {/* <View style={styles.pageHeader}><Text style={styles.tableCellHeader}>Page No</Text></View> */}
      </View>
      {/* Table data rows will go here */}
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>Bid Security Self Declaration Format</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Yes/ No</Text></View>
        {/* <View style={styles.titleCol}><Text style={styles.tableCell}>Notice Inviting Tender & List of Equipment</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View> */}
      </View>
     
    </View>
      </View>
  <Text style={{ textAlign: 'left', fontSize: 13, margin: 5 }}>*Supportive Documents must enclose for fulfilling Eligibility criteria, to be submitted by the Tendere</Text>
  <View style={styles.table}>
        {/* Table header */}
        <View style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.serialNumberHeader}><Text style={styles.tableCellHeader}>Name and Address of the Tenderer:</Text></View>
        <View style={styles.sectionHeader}><Text style={styles.tableCellHeader}>List of Equipment Quoted</Text></View>
        {/* <View style={styles.titleheader}><Text style={styles.tableCellHeader}>Title</Text></View> */}
        {/* <View style={styles.pageHeader}><Text style={styles.tableCellHeader}>Page No</Text></View> */}
      </View>
      {/* Table data rows will go here */}
      <View style={styles.tableRow}>
        <View style={styles.serialNumberCol}><Text style={styles.tableCell}>Bid Security Self Declaration Format</Text></View>
        <View style={styles.sectionCol}><Text style={styles.tableCell}>Yes/ No</Text></View>
        {/* <View style={styles.titleCol}><Text style={styles.tableCell}>Notice Inviting Tender & List of Equipment</Text></View>
        <View style={styles.pageCol}><Text style={styles.tableCell}></Text></View> */}
      </View>
     
    </View>
      </View>
</Page>





  </Document>
);

const PDFLayoout = () => {
  const [usercred, setUserCred] = useState({});
  const [lastSubmission, setLastSubmission] = useState({});
  const [loading, setLoading] = useState(true); // Initialize state

  // Asynchronous function to fetch user details
  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/users", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("usertoken"),
        },
      });
      const json = await response.json();
      console.log(json);
      setUserCred(json);
      if (
        json.length > 0 &&
        json[0].formSubmissions &&
        json[0].formSubmissions.length > 0
      ) {
        const submissions = json[0].formSubmissions;
        console.log("submissions", submissions[submissions.length - 1]);
        setLastSubmission(submissions[submissions.length - 1]); // Set the last form submission
      } else {
        console.error("No submissions found");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchUserDetails(); // Call the function inside useEffect
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ alignSelf: "flex-start" }}>
        {!loading && (
          <PDFDownloadLink
            document={<PDFFile lastSubmission={lastSubmission} />}
            fileName="Tender_form.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        )}
      </div>
      {!loading && (
        <PDFViewer style={{ flex: 1, width: "100%", height: "100%" }}>
          <PDFFile lastSubmission={lastSubmission} />
        </PDFViewer>
      )}
      {loading && <p>Loading user details...</p>}
    </div>
  );
};

export default PDFLayoout;

// export default PDFFile;
