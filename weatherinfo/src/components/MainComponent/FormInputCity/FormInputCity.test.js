import React from "react";
import { shallow } from "enzyme";
import FormInputCity from "./FormInputCity";

describe("FormInputCity", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormInputCity />);
    expect(wrapper).toMatchSnapshot();
  });
});
