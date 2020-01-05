import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses.reducers";
import filtersReducer from "../reducers/filters.reducers";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
};

// Store creation
