import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import React from 'react';
import Results from './Results';


// error={error}
// inputValue={inputValue}
// setInputValue={setInputValue}
// willClear={willClear}
// setWillClear={setWillClear}
// users={userInfo}
// photo={userPhoto}
// isSent={isSent}
// isLoad={isLoad}

describe('Results component test', () => {
  it('should render component with initial state', () => {
    const wrapper = shallow(<Results/>);
    expect(wrapper.find('.Results').length).toBe(1);
    expect(wrapper.find('.Results User').length).toBe(0);
  });

  it('should render component with one children', () => {
    const wrapper = shallow(<Results isLoad={true} willClear={false} error={false} inputValue={''} users={[{name:'test', username:'@test', id:'1'}]} photo={[{thumbnailUrl:'https://img1.fonwall.ru/o/yh/animal-bird-branches-closeup.jpeg?route=mid&h=750', id:'1'}]}/>);
    expect(wrapper.find('.Results').length).toBe(1);
    expect(wrapper.find('.Results User').length).toBe(1);
  });
})