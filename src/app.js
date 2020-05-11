import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => <div>This is my dashboard page</div>;

const AddExpensePage = () => <div>This is my add expense page</div>;

const EditExpensePage = () => <div>This is my Edit expense page</div>;

const HelpPage = () => <div>How can I help?</div>;

const PageNotFound = () => <div>404! Not found</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={PageNotFound}></Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
