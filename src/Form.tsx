import React from "react";

export function Form() {
  return (
    <>
      <form action="#">
        <input type="text" id="gender" name="gender" placeholder="Gender" />

        <input type="text" id="married" name="married" placeholder="Married" />

        <input
          type="text"
          id="dependents"
          name="dependents"
          placeholder="Dependents"
        />

        <input
          type="text"
          id="education"
          name="education"
          placeholder="Education"
        />

        <input
          type="text"
          id="selfEmployed"
          name="selfEmployed"
          placeholder="Self employed ?"
        />

        <input
          type="text"
          id="applicantIncome"
          name="applicantIncome"
          placeholder="Applicant income"
        />

        <input
          type="text"
          id="coApplicantIncome"
          name="coApplicantIncome"
          placeholder="Co-Applicant income"
        />

        <input
          type="text"
          id="loanAmount"
          name="loanAmount"
          placeholder="Loan amount"
        />

        <input
          type="text"
          id="loanTerm"
          name="loanTerm"
          placeholder="Loan term"
        />

        <input
          type="text"
          id="creditHistory"
          name="creditHistory"
          placeholder="Credit history"
        />

        <input
          type="text"
          id="propertyArea"
          name="propertyArea"
          placeholder="Property area"
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
