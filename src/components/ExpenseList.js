import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses.selectors";

const ExpenseList = props => {
  const { expenses } = props;
  return (
    <div>
      <h1>Expense List</h1>
      <ul>
        {expenses.map(expense => (
          <ExpenseListItem {...expense} key={expense.id} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
