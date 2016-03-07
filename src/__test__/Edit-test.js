import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { Edit } from 'containers';

const replaceMock = () => {};
const context = { router: {replace: replaceMock} };

describe('<Edit /> container', () => {
  it('renders w/o errors', () => {
    localStorage.videos = JSON.stringify([{
      id: '123',
      title: 'Foo',
      image: 'http://test.foo/image.jpg',
      thumbnail: 'http://test.foo/thumb.jpg',
      description: 'Foo moo boo'
    }]);
    const wrapper = mount(<Edit params={{id: '123'}}/>, { context });
    expect(wrapper).to.be.present();
  });

  it('renders w/o errors w/o localStorage.videos', () => {
    localStorage.clear();
    const wrapper = mount(<Edit params={{id: '123'}}/>, { context });
    expect(wrapper).to.be.present();
  });

  it('renders w/o errors when the video ID is not found', () => {
    localStorage.videos = JSON.stringify([{
      id: 'unknown',
      title: 'Foo',
      image: 'http://test.foo/image.jpg',
      thumbnail: 'http://test.foo/thumb.jpg',
      description: 'Foo moo boo'
    }]);
    const wrapper = mount(<Edit params={{id: '123'}}/>, { context });
    expect(wrapper).to.be.present();
  });

  it('should submit Handle', () => {
    localStorage.videos = JSON.stringify([{
      id: '123',
      title: 'Foo',
      image: 'http://test.foo/image.jpg',
      thumbnail: 'http://test.foo/thumb.jpg',
      description: 'Foo moo boo'
    }]);
    const wrapper = mount(<Edit params={{id: '123'}}/>, { context });
    wrapper.find('#title').simulate('change', {target: {value: 'Bar'}});
    wrapper.component.getWrappedComponent().handleSubmit({preventDefault: ()=>{}});
    expect(wrapper).to.be.present();
  });
});
