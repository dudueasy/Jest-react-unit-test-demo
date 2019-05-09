import React from 'react';
import {shallow} from 'enzyme';
import {checkProps} from '../../../Utils';

import {findByDataTest} from '../../../Utils';
import Headline from './index';

const setUpHeadline = (props = {}) => {
  return shallow(<Headline {...props}/>);
};


describe('Headline component', () => {

  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test header',
        desc: 'Test Desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 23,
          onlineStatus: false,
        }],
      };

      const propsErr = checkProps(
        Headline,
        expectedProps,
      );

      console.log('propsErr : ', propsErr);
      expect(propsErr).toBeUndefined();


    });
  });

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
      expect(findByDataTest(component, 'header').length).toBe(0);
    });
  });


});


