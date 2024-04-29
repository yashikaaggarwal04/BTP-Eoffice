import React, { useState } from "react";
import "./form.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function TenderForm() {
  const [equipmentName, setEquipmentName] = useState("");
  const [tenderNo, setTenderNo] = useState("");
  const [piName, setPiName] = useState("");
  const [piEmail, setPiEmail] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [estimatedCost, setEstimatedCost] = useState("");
  const [earnestMoney, setEarnestMoney] = useState("");
  const [turnover, setTurnover] = useState("");
  const [date, setDate] = useState("");
  const [tenderSubmissionLastDate, setTenderSubmissionLastDate] = useState("");
  const [querySubmissionDate, setQuerySubmissionDate] = useState("");
  const [responseReleaseDate, setResponseReleaseDate] = useState("");
  const [bidOpeningDate, setBidOpeningDate] = useState("");
  const [bidOpeningTime, setBidOpeningTime] = useState("");
  const [warrantyDuration, setWarrantyDuration] = useState("");
  const [depositByBidder, setDepositByBidder] = useState("");
  const [technicalSpecifications, setTechnicalSpecifications] = useState("");
  const [experienceInField, setExperienceInField] = useState("NO");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState('');
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        equipmentName,
        tenderNo,
        piName,
        piEmail,
        departmentName,
        estimatedCost,
        earnestMoney,
        turnover,
        date,
        tenderSubmissionLastDate,
        querySubmissionDate,
        responseReleaseDate,
        bidOpeningDate,
        bidOpeningTime,
        warrantyDuration,
        depositByBidder,
        technicalSpecifications,
        experienceInField,
        quantity,
      };
      
      const response = await axios.post('http://localhost:8080/api/v1/postTenderForm', formData, {
      headers: {
        "Authorization": localStorage.getItem("usertoken")
      }
    });
      console.log('Form Submission Successful', response.data);
      history('/home/form/pdf');
      // resetFormFields();
      // Optionally, redirect to login page after successful registration
      // window.location.href = '/login';
    } catch (err) {
        console.log('Form Submission Error', err.message);
        setError(err.message);
    }
  };
  // const resetFormFields = () => {
  //   setEquipmentName("");
  //   setTenderNo("");
  //   setPiName("");
  //   setPiEmail("");
  //   setDepartmentName("");
  //   setEstimatedCost("");
  //   setEarnestMoney("");
  //   setTurnover("");
  //   setDate("");
  //   setTenderSubmissionLastDate("");
  //   setQuerySubmissionDate("");
  //   setResponseReleaseDate("");
  //   setBidOpeningDate("");
  //   setBidOpeningTime("");
  //   setWarrantyDuration("");
  //   setDepositByBidder("");
  //   setTechnicalSpecifications("");
  //   setExperienceInField("NO");
  //   setQuantity("");
  // };

  const handleCostChange = (event) => {
    const cost = event.target.value;
    setEstimatedCost(cost);
    setEarnestMoney(cost ? (cost * 0.02).toFixed(2) : "");
    setTurnover(cost ? (cost * 0.5).toFixed(2) : "");
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    if (selectedDate) {
      const dateObject = new Date(selectedDate);
      dateObject.setDate(dateObject.getDate() + 21);
      setTenderSubmissionLastDate(dateObject.toISOString().split("T")[0]);

      const queryDateObject = new Date(selectedDate);
      queryDateObject.setDate(queryDateObject.getDate() + 14);
      setQuerySubmissionDate(queryDateObject.toISOString().split("T")[0]);
    } else {
      setTenderSubmissionLastDate("");
      setQuerySubmissionDate("");
    }
  };

  

  return (
    <div className="form-container">
      {/* <h3 style={{ padding: "10px" }}>
          <center>Tender Generation Form</center>
        </h3> */}
      <form className="form" onSubmit={handleSubmit}>
      <button 
  type="submit" 
  className="btn btn-success" 
  style={{ 
    
    display: 'block', // Make the button a block-level element
    margin: '10px auto', // Apply automatic horizontal margins
    width: 'fit-content' // This ensures the button width is as wide as its content
  }}>
  Click here to generate Tender
</button>
        <div className="mb-3">
          <label htmlFor="InputEquipmentName" className="form-label">
            1. Name of Equipment
          </label>
          <input
            type="text"
            className="form-control"
            id="InputEquipmentName"
            aria-describedby="equipmentHelp"
            placeholder="Enter equipment name"
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputTenderNo" className="form-label">
            2. Tender No.
          </label>
          <input
            type="text"
            className="form-control"
            id="InputTenderNo"
            placeholder="(IIT/SRIC/Dept. code/ Project code/ PI(short)/ 23-24/EQ)"
            value={tenderNo}
            onChange={(e) => setTenderNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPIName" className="form-label">
            3. Name of PI
          </label>
          <input
            type="text"
            className="form-control"
            id="InputPIName"
            placeholder="Enter PI's name"
            value={piName}
            onChange={(e) => setPiName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPIEmail" className="form-label">
            4. PI’s Institute email id
          </label>
          <input
            type="email"
            className="form-control"
            id="InputPIEmail"
            placeholder="Enter PI's email"
            value={piEmail}
            onChange={(e) => setPiEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputDepartmentName" className="form-label">
            5. Name of Department
          </label>
          <input
            type="text"
            className="form-control"
            id="InputDepartmentName"
            placeholder="Enter department name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputEstimatedCost" className="form-label">
            6. Estimated cost
          </label>
          <input
            type="text"
            className="form-control"
            id="InputEstimatedCost"
            placeholder="Enter estimated cost"
            value={estimatedCost}
            onChange={handleCostChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputEMD" className="form-label">
            7. Earnest Money (EMD) – Rs {earnestMoney} (2% of estimated cost)
          </label>
          <input
            type="text"
            className="form-control"
            id="InputEMD"
            placeholder="Enter EMD"
            value={earnestMoney}
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputEMD" className="form-label">
            8. Average Annual Turnover – Min. Rs {turnover} (Min 50% of
            estimated cost)
          </label>
          <input
            type="text"
            className="form-control"
            id="Turnover"
            placeholder="Enter EMD"
            value={turnover}
            onChange={(e) => setTurnover(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputDate" className="form-label">
            9. Date
          </label>
          <input
            type="date"
            className="form-control"
            id="InputDate"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputTenderSubmissionLastDate" className="form-label">
            10. Last date for submission of Tender (Online only) (Min 21 days)
          </label>
          <input
            type="date"
            className="form-control"
            id="InputTenderSubmissionLastDate"
            value={tenderSubmissionLastDate}
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputQuerySubmissionDate" className="form-label">
            11. Last date for submission of written queries for clarifications
            (7 days before the last date for submission)
          </label>
          <input
            type="date"
            className="form-control"
            id="InputQuerySubmissionDate"
            value={querySubmissionDate}
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputResponseReleaseDate" className="form-label">
            12. Date of release of response to clarification
          </label>
          <input
            type="date"
            className="form-control"
            id="InputResponseReleaseDate"
            value={responseReleaseDate}
            onChange={(e) => setResponseReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputBidOpeningDateTime" className="form-label">
            13. Date for the opening of Technical Bid Average annual turnover
          </label>
          <input
            type="date"
            className="form-control"
            id="InputBidOpeningDateTime"
            value={bidOpeningDate}
            onChange={(e) => setBidOpeningDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputBidOpeningDateTime" className="form-label">
            14. Time for the opening of Technical Bid Average annual turnover
          </label>
          <input
            type="time"
            className="form-control"
            id="InputBidOpeningDateTime"
            value={bidOpeningTime}
            onChange={(e) => setBidOpeningTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputWarrantyDuration" className="form-label">
            15. Comprehensive onsite Warranty– (in yr)
          </label>
          <input
            type="text"
            className="form-control"
            id="InputWarrantyDuration"
            placeholder="Enter warranty duration"
            value={warrantyDuration}
            onChange={(e) => setWarrantyDuration(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputDepositByBidder" className="form-label">
            16. Deposit by bidder- ___ (% of the total value of order)
          </label>
          <input
            type="text"
            className="form-control"
            id="InputDepositByBidder"
            placeholder="Enter deposit amount"
            value={depositByBidder}
            onChange={(e) => setDepositByBidder(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputTechnicalSpecifications" className="form-label">
            17. Technical specifications
          </label>
          <textarea
            className="form-control"
            id="InputTechnicalSpecifications"
            rows="3"
            placeholder="Enter technical specifications"
            value={technicalSpecifications}
            onChange={(e) => setTechnicalSpecifications(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="InputExperienceInField" className="form-label">
            18. Minimum 5 years of experience in the field of supply of
            laboratory equipment- (YES/NO)
          </label>
          <select
            className="form-select"
            id="InputExperienceInField"
            value={experienceInField}
            onChange={(e) => setExperienceInField(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="Quantity" className="form-label">
            19. Quantity
          </label>
          <input
            type="text"
            className="form-control"
            id="Quantity"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        
        
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default TenderForm;
