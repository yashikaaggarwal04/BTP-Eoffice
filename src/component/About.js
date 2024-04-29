import React from "react";

function About() {
  return (
    <div style={{ backgroundColor: "#003366", color: "white", minHeight: "100vh", overflow: 'auto' }}>
      <h1 style={{ textAlign: "center", padding: "10px" }}>About E-Procurement</h1>
      
      <div style={{ padding: "2px", textAlign: "center", borderBottom: '1px solid white' }}>
        
        <p>
          The e-procurement system at IIT Kharagpur is designed to simplify and enhance the procurement process
          by providing a digital platform that supports efficient, transparent, and seamless transactions.
          From tender creation to final awarding, the system ensures all procurement activities are conducted
          in a streamlined manner, reducing time and increasing compliance with policy standards.
        </p>
      </div>

      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: "50%", padding: "20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: '20px' }}>How to Generate New Tender?</h2>
          <div>
            {["Register", "Login", "Home", "New Tender", "Fill Form", "Submit", "View Tender (PDF)", "View Active Tender on Home Page", "Logout"].map((item, index, arr) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1px' }}>
                <div style={{ border: '2px solid white', padding: '10px', width: '200px', textAlign: 'center', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item}</div>
                {index < arr.length - 1 && <div style={{ fontSize: '20px', color: 'white', margin: '-5px 0' }}>↓</div>}
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ width: "50%", padding: "20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: '20px' }}>How to Generate Corrigendum?</h2>
          <div>
            {["Register", "Login","Home", "Corrigendum", "Fill Form", "Submit", "View Corrigendum", "View Updates on Home Page", "Logout"].map((item, index, arr) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1px' }}>
                <div style={{ border: '2px solid white', padding: '10px', width: '200px', textAlign: 'center', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item}</div>
                {index < arr.length - 1 && <div style={{ fontSize: '20px', color: 'white', margin: '-5px 0' }}>↓</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
