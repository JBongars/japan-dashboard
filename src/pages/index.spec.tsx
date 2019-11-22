import * as React from "react";
import * as RootPage from ".";
import { shallow, ShallowWrapper } from "enzyme";

describe("# Root Page", (): void => {
  it("should render a root page", (): void => {
    const wrapper: ShallowWrapper = shallow(<RootPage.default />);

    expect(wrapper).toMatchSnapshot();
  });
});
