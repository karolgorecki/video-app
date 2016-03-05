import React from 'react';
import { expect } from 'chai';
import {default as T} from 'react-addons-test-utils';
import {Demo} from 'components';
import {Root} from 'components';


describe('Demo should', ()=> {

  let dm;

  before(() => {
    dm = T.renderIntoDocument(<Demo />);
  })

  it(' renders without errors', () => {

    expect(dm).to.exist;
  });
});


describe('Root should', ()=> {

  let rt;

  before(() => {
    rt = T.renderIntoDocument(<Root />);
  })

  it(' renders without errors', () => {
    expect(rt).to.exist;
  });
});
