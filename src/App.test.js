import React, {createContext} from 'react';
import {connect, Provider} from 'react-redux';
import {shallow, render} from 'enzyme';
import {findByDataTest, testStore, checkProps} from './../Utils';

import App from './App';
import Button from './component/button';

const setUpApp = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<App store={store}/>).childAt(0).dive();
};


const setUpButton = (initialState = {}) => {
  const store = testStore(initialState);
  let ConnectedButton = connect()(Button);
  return shallow(<ConnectedButton store={store}/>).dive();
};


const context = createContext();
const Consumer = context.Consumer;


describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'title 1',
          body: 'test body',
        }
        ,
        {
          title: 'title 2',
          body: 'test body',
        },
      ],
    };

    wrapper = setUpApp(initialState);
    console.log('wrapper:', wrapper.debug());
  });


  it('Should render without errors', () => {
    const component = findByDataTest(wrapper, 'appComponent');
    expect(component.exists()).toBeTruthy();

    expect(true).toBeTruthy();
  });
});


describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUpButton();

    console.log('wrapper: ', wrapper.debug());
  });

  it('should render without error', () => {
    const component = findByDataTest(wrapper, 'buttonComponent');
    expect(component.exists()).toBeTruthy();
  });
});

