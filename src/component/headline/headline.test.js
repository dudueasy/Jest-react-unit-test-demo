import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';

import {findByDataTest} from '../../../Utils';

const setUpHeadline = (props = {}) => {
  return shallow(<Headline {...props}/>);
};


describe('Headline component', () => {

  describe('Have props ', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: 'Test Headline',
        desc: 'Test Desc',
      };
      wrapper = setUpHeadline(props);
    });

    it('Should render without errors', () => {
      const component = findByDataTest(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);

    });

    it('Should render a <h1 />', () => {
      const h1 = findByDataTest(wrapper, 'header');
      expect(h1.length).toBe(1);
    });


    it('Should render a description', () => {
      const desc = findByDataTest(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
    //
    // it(() => {
    //
    // });

  });

  describe('Have no props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUpHeadline();
    });


    it('Should render nothing', () => {
      const component = findByDataTest(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });


});


