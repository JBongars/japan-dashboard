import * as React from "react";
import * as App from ".";
import { shallow, ShallowWrapper } from "enzyme";

describe("# _App", (): void => {
  it("should render the app", (): void => {
    const wrapper: ShallowWrapper = shallow(<App.default />);

    expect(wrapper).toMatchSnapshot();
  });
});
