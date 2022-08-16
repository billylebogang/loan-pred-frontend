import React from "react";

interface loaneeType {
  Loan_ID: string;
  Gender: string;
  Married: string;
  Dependents: string;
  Education: string;
  Self_Employed: string;
  ApplicantIncome: string;
  CoapplicantIncome: string;
  LoanAmount: string;
  Loan_Amount_Term: string;
  Credit_History: string;
  Property_Area: string;
}

export function LoaneeCard({ props }) {
  const cardStyle = {
    margin: "30px auto",
    width: "300px",
    height: "500px",
    borderRadius: "40px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    cursor: "pointer",
    transition: "0.4s",
    border: "0.8px black solid",
  };

  return (
    <div style={cardStyle}>
      <h4>loan Details</h4>

      <p>loan id: {props.Loan_ID} </p>
      <p>Gender: {props.Gender} </p>
      <p>Married: {props.Married} </p>
      <p>Dependents: {props.Dependents} </p>
      <p>Edication: {props.Education} </p>
      <p>Self employed: {props.Self_Employed} </p>
      <p>Applicant income: {props.ApplicantIncome} </p>
      <p>Co-applicant income: {props.CoapplicantIncome} </p>
      <p>loan amount: {props.LoanAmount} </p>
      <p>loan amount term: {props.Loan_Amount_Term} </p>
      <p>Property area: {props.Property_Area} </p>
    </div>
  );
}
