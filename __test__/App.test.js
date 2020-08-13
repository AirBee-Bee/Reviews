import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/App';
import toJson from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() });

it ('renders correctly', () => {
  const wrapper = mount(<App />);
  expect(wrapper.state('error')).toEqual(undefined);
});

it('renders without crashing', () => {
  shallow(<App />);
});