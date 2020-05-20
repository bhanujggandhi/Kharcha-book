import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup a remove expense action object", () => {
  const action = removeExpense({ id: "bhanuj123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "bhanuj123",
  });
});

test("should setup an edit expense action object", () => {
  const action = editExpense("bhanuj123", { amount: 500, note: "hello" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "bhanuj123",
    updates: {
      amount: 500,
      note: "hello",
    },
  });
});

test("should setup an default add expense object", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});

test("should setup an add expense object", () => {
  const action = addExpense({
    description: "Bill",
    note: "Hello",
    amount: 50,
  });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "Bill",
      note: "Hello",
      amount: 50,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
