import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { Pagination } from 'components';

describe('<Pagination /> component', () => {
  it('renders w/o errors', () => {
    const wrapper = shallow(<Pagination current={1} max={20} perPage={4} />);
    expect(wrapper).to.be.present();
  });

  it('should render pagination with disabled prev button', () => {
    const wrapper = shallow(<Pagination current={1} max={20} perPage={4} />);
    expect(wrapper.find('.prev-page').hasClass('disabled')).to.equal(true);
  });

  it('should render pagination with disabled next button', () => {
    const wrapper = shallow(<Pagination current={3} max={9} perPage={3} />);
    expect(wrapper.find('.next-page').hasClass('disabled')).to.equal(true);
  });

  it('should render pages number correctly', () => {
    const wrapper = shallow(<Pagination current={5} max={20} perPage={4} />);
    expect(wrapper.find('.page-link')).to.have.length(5);
    expect(wrapper.find('.active')).to.have.length(1);
    expect(wrapper.find('.active').text()).to.equal('5 (current)');
  });

  it('does not render with to less elements', () => {
    const wrapper = shallow(<Pagination current={1} max={5} perPage={5} />);
    expect(wrapper.find('.pagination')).to.have.length(0);
  });
});
