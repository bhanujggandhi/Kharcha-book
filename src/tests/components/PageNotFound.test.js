import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "../../components/PageNotFound";

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
});
