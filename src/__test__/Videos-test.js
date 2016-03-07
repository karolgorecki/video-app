import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { Videos } from 'containers';

describe('<Videos /> container', () => {
  const wrapper = mount(<Videos />);
  it('renders w/o errors', () => {
    expect(wrapper).to.be.present();
  });

  it('should render with videos', () => {
    localStorage.videos = JSON.stringify([{
      id: '1',
      title: 'Foo',
      image: 'http://foo.bar/img.jpg',
      thumbnail: 'http://foo.bar/thb.jpg',
      description: 'Foo moo bar'
    }]);
    const wrapper = mount(<Videos />);
    expect(wrapper).to.be.present();
  });

  it('should render with page param', () => {
    localStorage.videos = JSON.stringify([{
      id: '1',
      title: 'Foo',
      image: 'http://foo.bar/img.jpg',
      thumbnail: 'http://foo.bar/thb.jpg',
      description: 'Foo moo bar'
    }]);
    const wrapper = mount(<Videos params={{page: "2"}} />);
    expect(wrapper).to.be.present();
  });

  it('should remove a video', () => {
    localStorage.videos = JSON.stringify([{
      id: '1',
      title: 'Foo',
      image: 'http://foo.bar/img.jpg',
      thumbnail: 'http://foo.bar/thb.jpg',
      description: 'Foo moo bar'
    }]);
    const wrapper = mount(<Videos />);
    wrapper.component.getWrappedComponent().removeVideo('1');
    expect(localStorage.videos).to.equal('[]');
  });
});
