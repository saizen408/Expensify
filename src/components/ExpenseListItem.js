import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = props => {
  const { description, amount, createdAt, id, dispatch } = props;
  return (
    <div>
      <li>
        <h3>Description: {description}</h3>
        <p>
          Amount: {amount} - {createdAt}
        </p>
        <button
          onClick={() => {
            dispatch(removeExpense({ id }));
          }}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default connect()(ExpenseListItem);
