import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class  extends Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense));
    props.onSubmit(expense);
    props.history.push("/");
  }
  render() { 
    return ( 
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={this.onSubmit}/>
    </div> 
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
