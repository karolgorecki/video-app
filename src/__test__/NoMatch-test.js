import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { NoMatch } from 'containers';

describe('<NoMatch /> container', () => {
  const wrapper = shallow(<NoMatch />);
  it('renders w/o errors', () => {
    expect(wrapper).to.be.present();
  });
});
