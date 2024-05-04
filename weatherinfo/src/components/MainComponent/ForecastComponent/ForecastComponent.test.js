import React from "react";
import { shallow } from "enzyme";
import ForecastComponent from "./ForecastComponent";

describe("ForecastComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ForecastComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
