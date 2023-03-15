//html elements
calculateLoan();
const loanAmountValue = document.getElementById("loan-amount");
const interestRateValue = document.getElementById("interest-rate");
const monthsToPayValue = document.getElementById("months-to-pay");
const monthPay = document.getElementById("payment");
const totalAmount = document.getElementById("total-amount");
const bankProfitEl = document.getElementById("bank-profit");

function calculateLoan() {
  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(0);
  monthPay.innerText = `Monthly Payment: ${monthlyPayment}`;
  totalAmountPayed = (monthlyPayment * monthsToPayValue).toFixed(0);
  totalAmount.innerText = `Total Amount payed: R ${totalAmountPayed}`;
  bankMoney = (totalAmountPayed - loanAmountValue).toFixed(0);
  bankProfitEl.innerText = `Bank Profit R ${bankMoney}`;
}
