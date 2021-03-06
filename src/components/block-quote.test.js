import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import BlockQuote from "./block-quote";

describe("<BlockQuote />", () => {
  test("should render correctly.", () => {
    const context = { styles: { components: { blockquote: { fontStyle: "oblique" } } } };
    const wrapper = mount(<BlockQuote>Some Quote</BlockQuote>, { context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
