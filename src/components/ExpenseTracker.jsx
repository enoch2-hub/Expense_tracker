import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseTracker.css"; // Ensure this is imported
import "../App.css"; // Import App.css for global styles and variables

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addExpense = (expense) => {
    // Add a unique ID for each expense
    setExpenses([...expenses, { ...expense, id: Math.random().toString() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const calculateTotals = () => {
    const totalIncome = expenses
      .filter((expense) => expense.amount > 0)
      .reduce((acc, expense) => acc + expense.amount, 0);

    const totalExpense = expenses
      .filter((expense) => expense.amount < 0)
      .reduce((acc, expense) => acc + expense.amount, 0);

    return { totalIncome, totalExpense };
  };

  const { totalIncome, totalExpense } = calculateTotals();
  const balance = totalIncome + totalExpense;

  return (
    // Apply light/dark class to the main container
    <div className={`ExpenseTracker-AppWrapper ${darkMode ? "dark" : "light"}`}>
      <div className="ExpenseTracker">
        <div className="Toggle">
          <label>
            Dark Mode
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          </label>
        </div>
        <h1>Expense Tracker</h1>

        <div className="Balance">
          <h2>
            Current Balance: <span style={{ color: balance >= 0 ? 'var(--income-color)' : 'var(--expense-color)' }}>${balance.toFixed(2)}</span>
          </h2>
          <div className="IncomeExpense">
            <div className="Income">
              <h3>Income</h3>
              <p>${totalIncome.toFixed(2)}</p>
            </div>
            <div className="Expense">
              <h3>Expense</h3>
              <p>${totalExpense.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <ExpenseForm addExpense={addExpense} />

        <div className="List">
          <h3>Transaction History</h3>
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;