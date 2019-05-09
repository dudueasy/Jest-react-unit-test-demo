import React from 'react';
import {shallow} from 'enzyme';
import SharedButton from './index';
import {findByDataTest, checkProps} from '../../../Utils/';

describe('Button component', () => {

  describe('Checking proptypes', () => {

      it('should return undefined as no warning', () => {

        const expectedProps = {
          buttonText: 'Example Button Text',
          emitEvent: () => {
          },
        };

        const propError = checkProps(SharedButton, expectedProps);
        expect(propError).toBeUndefined();
      });
    },
  );

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {
        },
      };

      wrapper = shallow(<SharedButton {...props}/>);
    });

    it('should render a <button>', () => {
      const button = findByDataTest(wrapper, 'buttonComponent');

      expect(button.exists()).toBeTruthy();
    });
  });
});


