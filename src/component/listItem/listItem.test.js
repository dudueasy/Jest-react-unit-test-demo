import React, {Fragment} from 'react';
import ListItem from './index';
import {shallow} from 'enzyme';
import {checkProps, findByDataTest} from '../../../Utils';


describe('ListItem Component', () => {

  describe('Checking props', () => {

    it('Should not have error', () => {
      const expectedProps = {
        title: 'Test title',
        desc: 'test desc',
      };


      const propError = checkProps(ListItem, expectedProps);
      expect(propError).toBeUndefined();
    });

  });

  describe('While receive proper property, renders', () => {
    let wrapper;

    const expectedProps = {
      title: 'Test title',
      desc: 'test desc',
    };

    beforeEach(() => {
      wrapper = shallow(<ListItem {...expectedProps}/>);
    });

    it('without error', () => {
      const ListItem = findByDataTest(wrapper, 'listItem');
      expect(ListItem.length).toBe(1);
    });


    it('with title component', () => {
      const titleComponent = findByDataTest(wrapper, 'titleComponent');
      expect(titleComponent.exists()).toBeTruthy();
    });

    it('with desc component', () => {
      const descComponent = findByDataTest(wrapper, 'descComponent');
      expect(descComponent.exists()).toBeTruthy();
    });

  });

  describe('While receive props without title, renders', () => {
    let wrapper;

    const expectedProps = {
      desc: 'test desc',
    };

    beforeEach(() => {
      wrapper = shallow(<ListItem {...expectedProps}/>);
    });


    it('nothing', () => {
      const descComponent = findByDataTest(wrapper, 'descComponent');
      expect(descComponent.exists()).toBeFalsy();
    });
  });

});