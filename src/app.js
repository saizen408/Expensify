import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses.selectors";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore(); //gives us access to dispatch/subscribe/etc.

const expenseOne = store.dispatch(
  addExpense({ description: "Water bill", amount: 100, createdAt: 4500 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Gas bill", amount: 300, createdAt: -1000 })
);

setTimeout(() => {
  store.dispatch(setTextFilter("bill"));
}, 3000);

store.dispatch(setTextFilter("water"));
console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
