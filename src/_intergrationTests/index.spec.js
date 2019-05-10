import React from 'react';
import moxios from 'moxios';
import {testStore} from '../../Utils';
import {fetchPosts} from '../actions';


describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });


  afterEach(() => {
    moxios.uninstall();
  });


  test('Store is updated correctly', () => {

    // create a mock as async request response data
    const expectedState = [
      {
        title: 'Example title 1',
        body: 'Some text',
      }, {
        title: 'Example title 2',
        body: 'Some text',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });


    return store.dispatch(fetchPosts()).then(() => {
      const newSate = store.getState();
      console.log('newSate:', newSate);
      expect(newSate.posts).toEqual(expectedState);
    });

  });


});




