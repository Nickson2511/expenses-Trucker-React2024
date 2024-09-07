// Importing necessary components and context provider
import React from 'react' // React for building the component
import { Header } from './components/Header' // Header component
import { Balance } from './components/Balance' // Balance component that shows current balance
import { IncomeExpenses } from './components/IncomeExpenses' // Component for displaying income and expenses
import { TransactionList } from './components/TransactionList' // List of all transactions
import { AddTransaction } from './components/AddTransaction' // Form to add new transactions

import { GlobalProvider } from './context/GlobalState' // GlobalProvider to manage global state

import './App.css' // Importing external CSS for styling the application

// Main App component
function App() {
  return (
    // Wrapping the entire application with GlobalProvider
    // This allows all components within to access the global state (transactions and actions)
    <GlobalProvider>
      {/* The Header component for the app's title */}
      <Header />

      {/* Main content container */}
      <div className='container'>
        {/* Balance component to show the current balance */}
        <Balance />

        {/* IncomeExpenses component to display the breakdown of income and expenses */}
        <IncomeExpenses />

        {/* TransactionList component to list all the transactions */}
        <TransactionList />

        {/* AddTransaction component to add new transactions */}
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

// Exporting the App component as the default export
export default App
