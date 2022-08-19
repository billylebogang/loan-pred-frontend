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
      .get("http://127.0.0.1:5000/data/test")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
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
            <LoaneeCard
              Loan_ID={loanObject.Loan_ID}
              Gender={loanObject.Gender}
              Married={loanObject.Married}
              Dependents={loanObject.Dependents}
              Education={loanObject.Education}
              Self_Employed={loanObject.Self_Employed}
              ApplicantIncome={loanObject.ApplicantIncome}
              CoapplicantIncome={loanObject.CoapplicantIncome}
              LoanAmount={loanObject.LoanAmount}
              Loan_Amount_Term={loanObject.Loan_Amount_Term}
              Credit_History={loanObject.Credit_History}
              Property_Area={loanObject.Property_Area}
            />
          ))}
        </div>
        <Form />
      </div>
    </>
  );
}

export default App;
