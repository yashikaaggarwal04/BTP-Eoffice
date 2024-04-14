import React, { Component } from "react";
import "./form.css"; 

export class TenderForm extends Component {
  render() {
    return (
      <div className="form-container">
      
        <form className="form">
        <h3 style={{padding:"10px"}}><center>Tendor Generation Form</center> </h3>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputDate" className="form-label">
              6. Date
            </label>
            <input
              type="text"
              className="form-control"
              id="InputDate"
              placeholder="__/__/____"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputEstimatedCost" className="form-label">
              7. Estimated cost
            </label>
            <input
              type="text"
              className="form-control"
              id="InputEstimatedCost"
              placeholder="Enter estimated cost"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputEMD" className="form-label">
              8. Earnest Money (EMD) – Rs_______(2% of estimated cost)
            </label>
            <input
              type="text"
              className="form-control"
              id="InputEMD"
              placeholder="Enter EMD"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputQuerySubmissionDate" className="form-label">
              9. Last date for submission of written queries for clarifications
              to the email ID (7 days before the last date for submission)
            </label>
            <input
              type="text"
              className="form-control"
              id="InputQuerySubmissionDate"
              placeholder="__/__/____"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputResponseReleaseDate" className="form-label">
              10. Date of release of response
            </label>
            <input
              type="text"
              className="form-control"
              id="InputResponseReleaseDate"
              placeholder="__/__/____"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="InputTenderSubmissionLastDate"
              className="form-label"
            >
              11. Last date for submission of Tender (Online only) (Min 21 days)
            </label>
            <input
              type="text"
              className="form-control"
              id="InputTenderSubmissionLastDate"
              placeholder="__/__/____"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputBidOpeningDateTime" className="form-label">
              12. Date and time for the opening of Technical Bid Average annual
              turnover (Min 50% of estimated value)
            </label>
            <input
              type="text"
              className="form-control"
              id="InputBidOpeningDateTime"
              placeholder="__/__/____"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputWarrantyDuration" className="form-label">
              13. Comprehensive onsite Warranty– (in yr)
            </label>
            <input
              type="text"
              className="form-control"
              id="InputWarrantyDuration"
              placeholder="Enter warranty duration"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputDepositByBidder" className="form-label">
              14. Deposit by bidder- ___ (10% of the total value of order)
            </label>
            <input
              type="text"
              className="form-control"
              id="InputDepositByBidder"
              placeholder="Enter deposit amount"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="InputTechnicalSpecifications"
              className="form-label"
            >
              15. Technical specifications
            </label>
            <textarea
              className="form-control"
              id="InputTechnicalSpecifications"
              rows="3"
              placeholder="Enter technical specifications"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="InputExperienceInField" className="form-label">
              16. Minimum 5 years of experience in the field of supply of
              laboratory equipment- (YES/NO)
            </label>
            <select className="form-select" id="InputExperienceInField">
              <option value="">Select</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TenderForm;
