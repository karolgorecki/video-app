import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { NoMatch } from 'containers';

describe('<NoMatch /> container', () => {
  it('renders w/o errors', () => {
    const wrapper = shallow(<NoMatch />);
    expect(wrapper).to.be.present();
  });
});
