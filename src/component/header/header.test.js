import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByDataTest} from '../../../Utils';

const setUpHeader = (props = {}) => {
  return shallow(<Header {...props}/>);
};


let order;

describe('Header component', () => {
  let component;
  component = setUpHeader();

  beforeAll(() => {
    console.log(' ========Tests for \<Header /> starts======== ');
  });

  afterAll(() => {
    console.log(' ========Tests for \<Header /> ends======== ');
  });


  beforeEach(() => {
    order = order ? order : 1;
    console.log(`第 ${order} 条测试开始执行`);
  });


  afterEach(() => {
    console.log(`第 ${order} 条测试结束执行`);
    order++;
  });


  it('should render itself without errors', () => {
    console.log(component.debug());
    const headerComponent = findByDataTest(component, 'headerComponent');
    expect(headerComponent.exists()).toBeTruthy();
  });


  it('Should render a logo', () => {
    const logo = findByDataTest(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });


});



