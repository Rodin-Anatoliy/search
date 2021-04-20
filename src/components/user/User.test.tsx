import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import React from 'react';
import User from './User';



describe('User component test', () => {
  it('should render component with initial state', () => {
    const wrapper = shallow(<User name='Test' nick='@Test' avatar='https://img1.fonwall.ru/o/yh/animal-bird-branches-closeup.jpeg?route=mid&h=750'/>);
    expect(wrapper.find('.User').length).toBe(1);
    expect(wrapper.find('.User__name').text()).toEqual('Test');
    expect(wrapper.find('.User__nick').text()).toEqual('@Test');
    expect(wrapper.find('.User__avatar img').prop('src')).toEqual('https://img1.fonwall.ru/o/yh/animal-bird-branches-closeup.jpeg?route=mid&h=750');
  });
})