import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import React from 'react';
import Search from './Search';



describe('Search component test', () => {
  it('should render component with initial state', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper.find('.Search').length).toBe(1);
    expect(wrapper.find('Bar').length).toBe(1);
    expect(wrapper.find('Results').length).toBe(1);
  });
})