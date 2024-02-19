// ExpenseTracker.js

import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
// import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
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

  return (
    <div className={`ExpenseTracker ${darkMode ? "dark" : "light"}`}>
      <div className="Toggle">
        <label>
          Dark Mode
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        </label>
      </div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <div className="Balance">
        <h2>
          Balance: $
          {calculateTotals().totalIncome + calculateTotals().totalExpense}
        </h2>
        <div className="IncomeExpense">
          <div className="List">
            <h3>Transaction History</h3>
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          </div>
          <div className="Totals">
            <div className="Income">
              <h3>Income</h3>
              <p>${calculateTotals().totalIncome}</p>
            </div>
            <div className="Expense">
              <h3>Expense</h3>
              <p>${calculateTotals().totalExpense}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
