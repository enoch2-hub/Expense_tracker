import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      const newExpense = {
        id: new Date().getTime(),
        text,
        amount: parseFloat(amount),
      };
      addExpense(newExpense);
      setText("");
      setAmount("");
    }
  };

  return (
    <form className="ExpenseForm" onSubmit={handleSubmit}>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
