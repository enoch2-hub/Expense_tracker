// ExpenseList.js
import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="ExpenseList">

    <ul>
      {expenses.map((expense) => (
        <li key={expense.id} className={expense.amount > 0 ? 'income' : 'expense'}>
          <span>{expense.text}</span>
          <span>${expense.amount.toFixed(2)}</span> {/* Format to 2 decimal places */}
          <button onClick={() => deleteExpense(expense.id)}>x</button>
        </li>
      ))}
      {expenses.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No transactions yet. Add some!</p>
      )}
    </ul>
      </div>
  );
};

export default ExpenseList;