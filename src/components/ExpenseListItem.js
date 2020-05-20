import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
