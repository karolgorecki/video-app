import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { New } from 'containers';

const replaceMock = () => {};

const wrapper = mount(<New/>);
describe('<New /> container', () => {
  it('renders w/o errors', () => {
    expect(wrapper).to.be.present();
  });

  it('should use changeHandler on change', () => {
    wrapper.find('#title').simulate('change', {target: {value: 'Bar'}});
    wrapper.find('#image').simulate('change', {target: {value: 'http://foo.boo/image.jpg'}});
    wrapper.find('#thumbnail').simulate('change', {target: {value: 'http://foo.boo/image.jpg'}});
    wrapper.find('#description').simulate('change', {target: {value: 'Foo moo bar'}});
  });

  it('should submit the form', () => {
    wrapper.component.getWrappedComponent().handleSubmit({preventDefault: ()=>{}});
  });

  it('should saveVideo with empty localStorage', () => {
    localStorage.clear();
    wrapper.component.getWrappedComponent().handleSubmit({preventDefault: ()=>{}});
  });

  // it('renders w/o errors when the video ID is not found', () => {
  //   localStorage.videos = JSON.stringify([{
  //     id: 'unknown',
  //     title: 'Foo',
  //     image: 'http://test.foo/image.jpg',
  //     thumbnail: 'http://test.foo/thumb.jpg',
  //     description: 'Foo moo boo'
  //   }]);
  //   const wrapper = mount(<Edit params={{id: '123'}}/>, { context });
  //   expect(wrapper).to.be.present();
  // });

  // it('should submit Handle', () => {
  //   localStorage.videos = JSON.stringify([{
  //     id: '123',
  //     title: 'Foo',
  //     image: 'http://test.foo/image.jpg',
  //     thumbnail: 'http://test.foo/thumb.jpg',
  //     description: 'Foo moo boo'
  //   }]);
  //   const wrapper = mount(<Edit params={{id: '123'}}/>, { context });
  //   wrapper.find('#title').simulate('change', {target: {value: 'Bar'}});
  //   wrapper.component.getWrappedComponent().handleSubmit({preventDefault: ()=>{}});
  //   expect(wrapper).to.be.present();
  // });
});
