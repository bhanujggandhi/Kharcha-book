import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove exepense with wrong id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "55",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = [
    {
      id: "4",
      description: "Grocery",
      note: "",
      amount: 700,
      createdAt: 1000,
    },
  ];
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense of given id", () => {
  const amount = 3700;
  const action = {
    type: "EDIT_EXPENSE",
    id: "2",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toBe(expenses[2].amount);
});

test("should not edit an expense if id is does not match", () => {
  const amount = 3700;
  const action = {
    type: "EDIT_EXPENSE",
    id: "5",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
