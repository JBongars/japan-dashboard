import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import * as App from ".";

describe("# _App", (): void => {
  it("should render the app", (): void => {
    const wrapper: ShallowWrapper = shallow(<App.default />);

    expect(wrapper).toMatchSnapshot();
  });
});
