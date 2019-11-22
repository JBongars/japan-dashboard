import * as React from "react";
import * as HomePage from ".";
import { shallow, ShallowWrapper } from "enzyme";

describe("# Home Page", (): void => {
  it("should render a homepage", (): void => {
    const wrapper: ShallowWrapper = shallow(<HomePage.default />);

    expect(wrapper).toMatchSnapshot();
  });
});
