import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import React from 'react';
import Bar from './Bar';



describe('Bar component test', () => {
  it('should render component with initial state', () => {
    const wrapper = shallow(<Bar/>);
    expect(wrapper.find('.Bar').length).toBe(1);
  });
})