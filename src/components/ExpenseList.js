import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem {...expense} key={expense.id} />;
    })}
  </div>
);

const ConnectedExpenseList = connect((state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
})(ExpenseList);

export default ConnectedExpenseList;
