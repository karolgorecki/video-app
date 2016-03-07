import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme());

import { Video } from 'components';

const videoMock = {
  id: '123',
  title: 'foo video',
  thumbnail: 'http://foo.bar/thumb.jpg',
  image: 'http://foo.bar/image.jpg',
  description: 'Foo moo boo'
};

let removeCalled = false;
const funcMock = () => {
  removeCalled = true;
}

describe('<Video /> component', () => {
  const wrapper = mount(<Video removeVideo={funcMock} id={'123'} video={videoMock}/>);
  it('renders w/o errors', () => {
    expect(wrapper).to.be.present();
  });

  it('should open & close modal', () => {
    expect(wrapper.state().modal).to.equal(false);
    wrapper.find('.open-modal').simulate('click');
    expect(wrapper.state().modal).to.equal(true);
    wrapper.component.getWrappedComponent().closeModal();
    expect(wrapper.state().modal).to.equal(false);
  });

  it('should call remove function on click trash icon', () => {
    wrapper.find('.remove-video').simulate('click');
    expect(removeCalled).to.be.true;
  });
});
