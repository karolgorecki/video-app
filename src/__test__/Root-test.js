import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { Root } from 'containers';

describe('<Root /> container', () => {
  const wrapper = shallow(<Root />);
  it('renders w/o errors', () => {
    expect(wrapper).to.be.present();
  });
});
