// Importing necessary hooks and context from React and GlobalState
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Function to format numbers as currency (e.g., $1,234.56)
function moneyFormatter(num) {
  // Convert number to a string with two decimal places
  let p = num.toFixed(2).split('.');

  // Format the integer part with commas for thousands
  return (
    '$ ' +
    p[0]
      .split('') // Split the integer part into individual characters
      .reverse() // Reverse the array to process from the end
      .reduce(function (acc, num, i) {
        // Insert commas every three digits
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' + // Append the decimal part (cents)
    p[1]
  );
}

// IncomeExpenses component to display income and expenses
export const IncomeExpenses = () => {
  // Extracting transactions from the GlobalContext
  const { transactions } = useContext(GlobalContext);

  // Map over the transactions and extract only the amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate total income by filtering positive amounts and summing them up
  const income = amounts
    .filter((item) => item > 0) // Filter for positive values (income)
    .reduce((acc, item) => (acc += item), 0); // Sum the income amounts

  // Calculate total expense by filtering negative amounts and summing them up
  const expense = 
    amounts
      .filter((item) => item < 0) // Filter for negative values (expenses)
      .reduce((acc, item) => (acc += item), 0) * -1; // Sum the expense amounts and make them positive

  return (
    <div className='inc-exp-container'>
      <div>
        {/* Displaying the income */}
        <h4>Income</h4>
        <p className='money plus'>{moneyFormatter(income)}</p>
      </div>
      <div>
        {/* Displaying the expenses */}
        <h4>Expense</h4>
        <p className='money minus'>{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
