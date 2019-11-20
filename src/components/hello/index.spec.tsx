
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import * as hello from './index';

describe('#hello', (): void => {
  it('should match a snapshot', (): void => {
    const wrapper: ReactWrapper = mount<React.Component>(<hello.default name="Jack" />);
    expect(wrapper).toMatchSnapshot();
  })
})
