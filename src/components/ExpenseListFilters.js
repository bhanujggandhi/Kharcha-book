import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
import { sortByDate, sortByAmount } from "../actions/filters";

const ExpenseListFilter = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(event) => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(event) => {
        event.target.value === "date"
          ? props.dispatch(sortByDate())
          : props.dispatch(sortByAmount());
      }}
    >
      <option value="date">date</option>
      <option value="amount">amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
