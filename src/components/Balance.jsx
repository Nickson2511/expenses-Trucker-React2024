// Importing necessary hooks and context from React and GlobalState
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Function to format numbers as currency (e.g., $1,234.56)
function moneyFormatter(num) {
  // Convert number to a string with exactly two decimal places
  let p = num.toFixed(2).split(".");

  // Format the integer part with commas for thousands
  return (
    "$" +
    p[0]
      .split("") // Split into individual characters
      .reverse() // Reverse the array to process from the end
      .reduce(function (acc, num, i) {
        // Insert commas every three digits
        return num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1] // Append the decimal part (cents)
  );
}

// Balance component to display the user's current balance
export const Balance = () => {
  // Extract the transactions from the GlobalContext
  const { transactions } = useContext(GlobalContext);

  // Map over the transactions and extract the amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate the total balance by summing all the amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      {/* Display the user's balance */}
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};
