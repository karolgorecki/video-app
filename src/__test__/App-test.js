import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { App } from 'containers';

// MOCKS
const HomeMock = () => <div className="home-test">Home</div>;

describe('<App /> container', () => {
  const wrapper = mount(<App children={<HomeMock/>} />);
  it('renders w/o errors', () => {
    expect(wrapper).to.be.present();
  });

  it('should render with localStorage.state', () => {
    localStorage.state = JSON.stringify({isMenuOpen: true});
    const wrapper = mount(<App children={<HomeMock/>} />);
    expect(wrapper).to.be.present();
  });

  it('should render children', () => {
    expect(wrapper.find('.home-test')).to.have.length(1);
    expect(wrapper.find('.home-test').text()).to.equal('Home');
  });

  describe('toggleMenu function', () => {
    it('should open/close menu', () => {
      expect(wrapper.state("isMenuOpen")).to.be.not.true;
      wrapper.component.getWrappedComponent().toggleMenu();
      expect(wrapper.state("isMenuOpen")).to.be.true;
    });
  });
});
