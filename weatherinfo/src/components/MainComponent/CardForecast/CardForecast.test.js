import React from "react";
import { shallow } from "enzyme";
import CardForecast from "./CardForecast";

describe("CardForecast", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardForecast />);
    expect(wrapper).toMatchSnapshot();
  });
});
