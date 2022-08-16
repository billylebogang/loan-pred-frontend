import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { checkFloatNumber } from "./App";
import mockData from "./mockData";

test("renders fidel on the screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/Fidelis/i);
  expect(linkElement).toBeInTheDocument();
});

test("test from app render", () => {
  render(<App />);
});

//test weather the first four rows of the data are rendered

/*test("test for the render of first four rows", () => {
  render(<App />);

  let mockId: string[] = [];

  mockData.map((mock) => mockId.push(mock.Loan_ID));
  //const mockIds:string[] = mockId;
  mockId.map((loanId) => {
    let idOnScreen = screen.getByText(loanId);

    expect(idOnScreen).toBe(loanId);
  });
});

//test wheather the right prediction is rendered(floating)

test("test for the right accuracy is rendered", () => {
  render(<App />);

  const predictionAccuracy: any = screen.getByTestId("accuracy");

  expect(checkFloatNumber(Number(predictionAccuracy))).toBe(true);
});*/

//describe
describe(" check for ids", () => {
  test("renders LP001015 on the screen", () => {
    render(<App />);
    const linkElement = screen.getByText(/LP001015/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders LP001022 on the screen", () => {
    render(<App />);
    const linkElement = screen.getByText(/LP001022/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders LP001031 on the screen", () => {
    render(<App />);
    const linkElement = screen.getByText(/LP001031/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders LP001035 on the screen", () => {
    render(<App />);
    const linkElement = screen.getByText(/LP001035/i);
    expect(linkElement).toBeInTheDocument();
  });
});
