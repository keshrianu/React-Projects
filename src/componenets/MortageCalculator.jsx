import React, { useState } from "react";

const MortageCalculator = () => {
  const [amount, setAmount] = useState();
  const [term, setTerm] = useState();
  const [intrest, setIntrest] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const handleCal = (e) => {
    e.preventDefault();

    const loanAmount = parseFloat(amount);
    const monthlyInterestRate = parseFloat(intrest) / 100 / 12;
    const loanTermInMonths = parseFloat(term) * 12;

    const monthlyPaymentAmount =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTermInMonths));
    const totalPayment = monthlyPaymentAmount * loanTermInMonths;

    setMonthlyPayment(monthlyPaymentAmount);

    setTotalPayment(totalPayment);

    setTotalInterest(totalPayment - loanAmount);
  };

  return (
    <div className="">
    <center className="mt-20">
    <div className="font-bold text-2xl bg-teal-200 flex items-center justify-center p-5 h-1/3 w-1/2">
      <form onSubmit={handleCal}>
        <div className="mt-3 mr-2">
          <label htmlFor="amount" className="mt-3 mr-2">
            Loan Amount:
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mt-3 mr-2">
          <label htmlFor="term" className="mt-3 mr-2">
            Loan Term(years):
          </label>

          <input
            type="number"
            name="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="mt-3 mr-2">
          <label htmlFor="intrest" className="mt-3 mr-2">
            Intrest rates(%):
          </label>

          <input
            type="number"
            name="intrest"
            value={intrest}
            onChange={(e) => setIntrest(e.target.value)}
          />
        </div>

        <button className="p-3 mt-3 bg-sky-500" type="submit">
          Calculate
        </button>
      </form>

      <div>
        Monthly Payment Amount: {monthlyPayment}
        <br />
        Total Payment Amount: {totalPayment}
        <br />
        Total intrest Paid:{totalInterest}
      </div>
    </div>
    </center>
    </div>
  );
};

export default MortageCalculator;
