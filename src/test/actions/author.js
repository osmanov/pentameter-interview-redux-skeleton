import test from 'ava';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import booksLibrary from '../../api/booksLibrary.js';
import * as statusTypes from '../../constants/status';
import * as types from '../../constants/actionTypes';
import * as authorActions from '../../actions/author';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('#loadAuthor', t => {
  const getState = {};
  const expectedActions = {type: statusTypes.LOADING_STATUS};
  const store = mockStore(getState);
  t.deepEqual(store.dispatch(authorActions.loadAuthor()), expectedActions)
});


test('#fetchAuthor', t => {
  const store = mockStore({});
  return booksLibrary.getAuthorById(1).then((author)=> {
    const expectedActions = {type: types.RECEIVE_AUTHOR, author};
    t.deepEqual(store.dispatch(authorActions.receiveAuthor(author)), expectedActions);
  });
});