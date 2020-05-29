import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  removeExpense,
  editExpense,
  addExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "farziuidhaiye";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test("should setup a remove expense action object", () => {
  const action = removeExpense({ id: "bhanuj123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "bhanuj123",
  });
});

test("should remove expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test("should edit expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = {
    amount: 50,
  };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const exepenseData = {
    description: "Mouse",
    amount: 300,
    note: "This one is better",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(exepenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...exepenseData,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(exepenseData);
      done();
    });
});

test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const exepenseDefaults = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...exepenseDefaults,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(exepenseDefaults);
      done();
    });
});

test("should setup an add expense object", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch the expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});
