import React, { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { LoaneeCard } from "./loaneeCard";
import mockData from "./mockData";
import axios from "axios";

export function checkFloatNumber(num: number) {
  return Number(num) === num && num % 1 !== 0;
}

type loanType = {
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

function App() {
  const mockDataTyped: {
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
  }[] = mockData;

  const [testData, setTestData] = useState(mockDataTyped);

  // useEffect(() => {
  //   fetch("https://www.loan-qualification.herokuapp.com/data/test")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("this error is " + response.status);
  //       }

  //       return response.json();
  //     })
  //     .then((actualData) => {
  //       // setTestData(actualData);
  //       console.log(actualData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://www.loan-qualification.herokuapp.com/data/test")
      .then(console.error());
  }, []);

  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "0.5rem",
  };

  return (
    <>
      <div className="App">
        <h1>Fidelis Loans</h1>

        <div style={styles}>
          {testData.map((loanObject) => (
            <LoaneeCard props={loanObject} />
          ))}
        </div>
        <Form />
      </div>
    </>
  );
}

export default App;
