import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpensesTotal from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";
import numberFormat from "../selectors/number-format";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numberFormat(expensesTotal);
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
          <span>{formattedExpensesTotal}</span>
          <div className="page-header__actions">
            <Link className="button" to="/create">
              Add Expense
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
