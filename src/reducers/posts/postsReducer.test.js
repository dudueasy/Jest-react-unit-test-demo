import {types} from '../../actions/actionTypes';
import postReducer from './postsReducer';


describe.only('Post Reducer', () => {

  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState)
      .toEqual([]);
  });


  it('Should return new state if action has type', () => {
    const posts = [
      {title: 'Test 1'},
      {title: 'Test 2'},
      {title: 'Test 3'},
    ];

    const newState = postReducer(
      undefined,
      {
        type: types.GET_POSTS,
        payload: posts,
      });

    expect(newState).toEqual(posts);
  });

});
