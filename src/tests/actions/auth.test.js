import { login, logout } from "../../actions/auth";

test("should setup a login action object", () => {
  const uid = "abc123";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid,
  });
});

test("should setup a logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});
