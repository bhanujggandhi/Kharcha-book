import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>
        {numberFormat(amount)}-{moment(createdAt).format("MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default ExpenseListItem;
