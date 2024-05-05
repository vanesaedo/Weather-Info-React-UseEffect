import React from "react";
import { shallow } from "enzyme";
import ForecastMain from "./ForecastMain";

describe("ForecastComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ForecastMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
