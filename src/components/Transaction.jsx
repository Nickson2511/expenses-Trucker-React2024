// Importing necessary hooks and context from React and GlobalState
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Function to format numbers as currency (e.g., $1,234.56)
function moneyFormatter(num) {
  // Convert number to a string with exactly two decimal places
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
    '.' +
    p[1] // Append the decimal part (cents)
  );
}

// Transaction component to display individual transactions
export const Transaction = ({ transaction }) => {
  // Accessing the deleteTransaction function from the GlobalContext
  const { deleteTransaction } = useContext(GlobalContext);

  // Determine the sign based on whether the transaction amount is positive or negative
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {/* Displaying the transaction text and formatted amount with the appropriate sign */}
      {transaction.text}{' '}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      
      {/* Button to delete the transaction by its ID */}
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
