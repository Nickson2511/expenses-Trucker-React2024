// Importing necessary hooks and components
import React, { useContext } from 'react';
import { Transaction } from './Transaction'; // Importing the Transaction component to display each transaction
import { GlobalContext } from '../context/GlobalState'; // Importing the global state context to access transactions

// The TransactionList component displays the list of all transactions
export const TransactionList = () => {
  // Accessing the transactions from GlobalContext using the useContext hook
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      {/* Section heading */}
      <h3>History</h3>

      {/* Unordered list to display all transactions */}
      <ul className="list">
        {/* Looping through each transaction in the transactions array and rendering a Transaction component for each */}
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
