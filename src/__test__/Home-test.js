import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

import { Home } from 'containers';

describe('<Home /> container', () => {
  it('renders w/o errors', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).to.be.present();
  });
});
