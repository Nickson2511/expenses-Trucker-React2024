// This is an unnamed default export function that takes two arguments: state and action
export default (state, action) => {

    // A switch statement is used to handle different action types
    switch (action.type) {
  
      // Case 1: If the action type is 'DELETE_TRANSACTION'
      case 'DELETE_TRANSACTION':
        return {
          // The current state is spread into a new object to maintain immutability
          ...state,
          
          // The transactions array is updated by filtering out the transaction 
          // with the id that matches the action payload (the transaction id to delete)
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        };
  
      // Case 2: If the action type is 'ADD_TRANSACTION'
      case 'ADD_TRANSACTION':
        return {
          // Again, the current state is spread into a new object
          ...state,
  
          // A new transaction is added by putting the action's payload 
          // (the new transaction) at the beginning of the transactions array
          transactions: [action.payload, ...state.transactions],
        };
  
      // Default case: If none of the above cases match, the current state is returned as-is
      default:
        return state;
    }
  };
  