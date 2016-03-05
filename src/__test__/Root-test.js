import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {Root, Demo} from 'components';

describe('<Root />', () => {

  it('renders three <Demo /> components', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find(Demo)).to.have.length(1);
  });
});
