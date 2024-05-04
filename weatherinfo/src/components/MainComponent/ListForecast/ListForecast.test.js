import React from "react";
import { shallow } from "enzyme";
import ListForecast from "./ListForecast";

describe("ListForecast", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListForecast />);
    expect(wrapper).toMatchSnapshot();
  });
});
