import React from "react";

type loaneeType = {
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
};

export const LoaneeCard: React.FC<loaneeType> = ({
  Loan_ID,
  Gender,
  Married,
  Dependents,
  Education,
  Self_Employed,
  ApplicantIncome,
  CoapplicantIncome,
  LoanAmount,
  Loan_Amount_Term,
  Credit_History,
  Property_Area,
}) => {
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

      <p>loan id: {Loan_ID} </p>
      <p>Gender: {Gender} </p>
      <p>Married: {Married} </p>
      <p>Dependents: {Dependents} </p>
      <p>Edication: {Education} </p>
      <p>Self employed: {Self_Employed} </p>
      <p>Applicant income: {ApplicantIncome} </p>
      <p>Co-applicant income: {CoapplicantIncome} </p>
      <p>loan amount: {LoanAmount} </p>
      <p>loan amount term: {Loan_Amount_Term} </p>
      <p>Property area: {Property_Area} </p>
    </div>
  );
};
