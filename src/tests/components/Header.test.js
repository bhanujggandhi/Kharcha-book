import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find("h1").text()).toBe("Expense Manager");
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test("should call logout button on click", () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={onClickSpy} />);
  wrapper.find("button").simulate("click");
  expect(onClickSpy).toHaveBeenCalled();
});
