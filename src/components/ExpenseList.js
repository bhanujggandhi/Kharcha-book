import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    <ol>
      {props.expenses.map((expense, index) => {
        return <li key={index}>{expense.description}</li>;
      })}
    </ol>
  </div>
);

const ConnectedExpenseList = connect((state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
})(ExpenseList);

export default ConnectedExpenseList;
