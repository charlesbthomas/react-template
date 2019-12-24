import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders without exploding', () => {
    const cmpt = shallow(<App />);
    expect(cmpt.exists()).toBe(true);
  });
});