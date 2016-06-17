import test from 'ava';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import booksLibrary from '../../api/booksLibrary.js';
import * as statusTypes from '../../constants/status';
import * as types from '../../constants/actionTypes';
import * as authorActions from '../../actions/author';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('#fetchAuthor',async t => {
  const authorId=1;
  const receiveAuthorExpected = await booksLibrary.getAuthorById(authorId);
  const expectedActions = [
    {type: statusTypes.LOADING_STATUS},
    {type: types.RECEIVE_AUTHOR, author:receiveAuthorExpected}
  ];

  const store = mockStore({});
  return store.dispatch(authorActions.fetchAuthor(authorId)).then(()=>{
    t.deepEqual(store.getActions(), expectedActions)
  });
});