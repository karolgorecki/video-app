import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { Home } from 'containers';

describe('<Home /> container', () => {
  const wrapper = shallow(<Home />);
  it('renders w/o errors', () => {
    expect(wrapper).to.be.present();
  });
});
