import test from 'ava';
import { shallow ,render} from 'enzyme';
import App from '../../containers/App';
import React, { cloneElement } from 'react';

test('<App/>', t => {
  const wrapper = shallow(<App/>);
});