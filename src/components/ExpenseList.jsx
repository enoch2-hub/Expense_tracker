import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="ExpenseList">
      {/* <h2>Expense List</h2> */}
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.text} - ${expense.amount}{" "}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
