// Importing required modules from React
import { createContext, useReducer } from 'react';
// Importing the reducer function that will handle state updates
import AppReducer from './AppReducer';

// Initial state: an object with an empty transactions array
const initialState = {
  transactions: [],
};

// Create a context that will be used for global state management
export const GlobalContext = createContext(initialState);

// GlobalProvider is the provider component that will wrap around other components
// It provides the global state and actions to its children
export const GlobalProvider = ({ children }) => {

  // useReducer is used to manage the state based on actions
  // state represents the current state, and dispatch is the function that triggers an action
  // AppReducer is the reducer function that modifies the state based on action types
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action to delete a transaction
  function deleteTransaction(id) {
    // Dispatch an action of type 'DELETE_TRANSACTION'
    // The payload carries the id of the transaction to be deleted
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  // Action to add a new transaction
  function addTransaction(transaction) {
    // Dispatch an action of type 'ADD_TRANSACTION'
    // The payload carries the new transaction object to be added
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  // Return the provider component
  // GlobalContext.Provider will make the state and actions available to its children
  return (
    <GlobalContext.Provider
      value={{
        // Provide access to the transactions array in the state
        transactions: state.transactions,

        // Provide the deleteTransaction function to be used by other components
        deleteTransaction,

        // Provide the addTransaction function to be used by other components
        addTransaction,
      }}
    >
      {/* Render any child components that need access to the global context */}
      {children}
    </GlobalContext.Provider>
  );
};
