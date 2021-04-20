import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';



describe('app test', () => {
  it('should render component with initial state', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App').length).toBe(1);
    expect(wrapper.find('Search').length).toBe(1);
  });
})

