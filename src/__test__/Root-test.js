import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { Root } from 'containers';

describe('<Root /> container', () => {
  it('renders w/o errors', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper).to.be.present();
  });
});
