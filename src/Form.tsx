import axios from "axios";
import React, { useState } from "react";

export function Form() {
  const [Loan_ID, setLoan_ID] = useState("");
  const [Gender, setGender] = useState("");
  const [Married, setMarried] = useState("");
  const [Dependents, setDependents] = useState("");
  const [Education, setEducation] = useState("");
  const [Self_Employed, setSelfEmployed] = useState("");
  const [ApplicantIncome, setApplicantIncome] = useState("");
  const [CoapplicantIncome, setCoApplicantIncome] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [Loan_Amount_Term, setLoanAmountTerm] = useState("");
  const [Credit_History, setCreditHistory] = useState("");
  const [Property_Area, setPropertyArea] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const loanObject = {
      Gender,
      Married,
      Education,
      Self_Employed,
      ApplicantIncome,
      CoapplicantIncome,
      LoanAmount,
      Loan_Amount_Term,
      Credit_History,
      Property_Area,
    };

    axios
      .post("http://127.0.0.1:5000/predict/", {
        Gender: Gender,
        Married: Married,
        Education: Education,
        Self_Employed: Self_Employed,
        ApplicantIncome: ApplicantIncome,
        CoapplicantIncome: CoapplicantIncome,
        LoanAmount: LoanAmount,
        Loan_Amount_Term: Loan_Amount_Term,
        Credit_History: Credit_History,
        Property_Area: Property_Area,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(loanObject);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="Gender"
          value={Gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <input
          type="text"
          id="married"
          name="married"
          placeholder="Married"
          value={Married}
          onChange={(e) => setMarried(e.target.value)}
        />

        <input
          type="text"
          id="dependents"
          name="dependents"
          placeholder="Dependents"
          value={Dependents}
          onChange={(e) => setDependents(e.target.value)}
        />

        <input
          type="text"
          id="education"
          name="education"
          placeholder="Education"
          value={Education}
          onChange={(e) => setEducation(e.target.value)}
        />

        <input
          type="text"
          id="selfEmployed"
          name="selfEmployed"
          placeholder="Self employed ?"
          value={Self_Employed}
          onChange={(e) => setSelfEmployed(e.target.value)}
        />

        <input
          type="text"
          id="applicantIncome"
          name="applicantIncome"
          placeholder="Applicant income"
          value={ApplicantIncome}
          onChange={(e) => setApplicantIncome(e.target.value)}
        />

        <input
          type="text"
          id="coApplicantIncome"
          name="coApplicantIncome"
          placeholder="Co-Applicant income"
          value={CoapplicantIncome}
          onChange={(e) => setCoApplicantIncome(e.target.value)}
        />

        <input
          type="text"
          id="loanAmount"
          name="loanAmount"
          placeholder="Loan amount"
          value={LoanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />

        <input
          type="text"
          id="loanTerm"
          name="loanTerm"
          placeholder="Loan term"
          value={Loan_Amount_Term}
          onChange={(e) => setLoanAmountTerm(e.target.value)}
        />

        <input
          type="text"
          id="creditHistory"
          name="creditHistory"
          placeholder="Credit history"
          value={Credit_History}
          onChange={(e) => setCreditHistory(e.target.value)}
        />

        <input
          type="text"
          id="propertyArea"
          name="propertyArea"
          placeholder="Property area"
          value={Property_Area}
          onChange={(e) => setPropertyArea(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
