// Import necessary hooks from React
import { useContext, useState } from 'react';
// Import the GlobalContext, which provides access to global state and actions
import { GlobalContext } from '../context/GlobalState';

// Define the AddTransaction component
export const AddTransaction = () => {
  // useState hook to manage the local state for 'text' and 'amount'
  // 'text' holds the description of the transaction (e.g., salary, groceries)
  // 'setText' is the function used to update 'text'
  const [text, setText] = useState('');

  // 'amount' holds the value of the transaction (can be positive for income or negative for expense)
  // 'setAmount' is the function used to update 'amount'
  const [amount, setAmount] = useState(0);

  // Extract the 'addTransaction' action from the GlobalContext using the useContext hook
  // 'addTransaction' is used to add a new transaction to the global state
  const { addTransaction } = useContext(GlobalContext);

  // Function that is triggered when the form is submitted
  const onSubmit = (e) => {
    // Prevent the form's default behavior of refreshing the page on submit
    e.preventDefault();

    // Create a new transaction object with a randomly generated ID, 'text', and 'amount'
    const newTransaction = {
      // Generate a random unique ID for the transaction
      id: Math.floor(Math.random() * 1000000),

      // Assign the current value of 'text' as the transaction description
      text,

      // Convert 'amount' to a number using the unary plus (+) operator, ensuring it's treated as a number
      amount: +amount,
    };

    // Call the 'addTransaction' function (from GlobalContext) to add the new transaction to the global state
    addTransaction(newTransaction);
  };

  // Return the JSX for the form component
  return (
    <>
      {/* Title for the form */}
      <h3>Add new transaction</h3>

      {/* Form that triggers 'onSubmit' when submitted */}
      <form onSubmit={onSubmit}>

        {/* Input field for entering the transaction text */}
        <div className='form-control'>
          <label htmlFor='text'>Text</label>

          {/* The value of this input is controlled by the 'text' state */}
          {/* When the input changes, 'setText' updates the 'text' state */}
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text'
          />
        </div>

        {/* Input field for entering the transaction amount */}
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>

          {/* The value of this input is controlled by the 'amount' state */}
          {/* When the input changes, 'setAmount' updates the 'amount' state */}
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount'
          />
        </div>

        {/* Button to submit the form and trigger the 'onSubmit' function */}
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
};
