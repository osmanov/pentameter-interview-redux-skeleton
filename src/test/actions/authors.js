import test from 'ava';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import booksLibrary from '../../api/booksLibrary.js';
import * as statusTypes from '../../constants/status';
import * as types from '../../constants/actionTypes';
import * as authorActions from '../../actions/authors';
import assert from 'assert';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('fetchAuthors', async t => {
  const receiveAuthorsExpected = await booksLibrary.getAuthors();
  const expectedActions = [
    {type: statusTypes.LOADING_STATUS},
    {type: types.RECEIVE_AUTHORS, authors: receiveAuthorsExpected}
  ];

  const store = mockStore({list: []});
  return store.dispatch(authorActions.fetchAuthors()).then(()=> {
    t.deepEqual(store.getActions(), expectedActions)
  });
});