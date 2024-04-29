import React, { Component } from "react";
import "./Correction.css";

export class RevisedTenderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenderName: "",
      tenderID: "",
      lastDate: "",
      lastTime: "",
      revisedDate: "",
      revisedTime: ""
    };
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div className="form-container">
        <form className="form">
          <h3 style={{ padding: "10px" }}>
            <center>Revised Tender Submission Form</center>
          </h3>
          <div className="mb-3">
            <label htmlFor="InputTenderName" className="form-label">
              1. Tender Name
            </label>
            <input
              type="text"
              className="form-control"
              id="InputTenderName"
              placeholder="Enter Tender Name"
              value={this.state.tenderName}
              onChange={(e) => this.handleInputChange('tenderName', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputTenderID" className="form-label">
              2. Tender ID
            </label>
            <input
              type="text"
              className="form-control"
              id="InputTenderID"
              placeholder="Enter Tender ID"
              value={this.state.tenderID}
              onChange={(e) => this.handleInputChange('tenderID', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputLastDate" className="form-label">
              3. Last Date for Submitting the Tender Document
            </label>
            <input
              type="date"
              className="form-control"
              id="InputLastDate"
              value={this.state.lastDate}
              onChange={(e) => this.handleInputChange('lastDate', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputLastTime" className="form-label">
              4. Last Time for Submitting the Tender Document
            </label>
            <input
              type="time"
              className="form-control"
              id="InputLastTime"
              value={this.state.lastTime}
              onChange={(e) => this.handleInputChange('lastTime', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputRevisedDate" className="form-label">
              5. Revised Date for Submitting the Tender Document
            </label>
            <input
              type="date"
              className="form-control"
              id="InputRevisedDate"
              value={this.state.revisedDate}
              onChange={(e) => this.handleInputChange('revisedDate', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputRevisedTime" className="form-label">
              6. Revised Time for Submitting the Tender Document
            </label>
            <input
              type="time"
              className="form-control"
              id="InputRevisedTime"
              value={this.state.revisedTime}
              onChange={(e) => this.handleInputChange('revisedTime', e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RevisedTenderForm;
