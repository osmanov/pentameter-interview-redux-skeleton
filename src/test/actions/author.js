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


test('#fetchAuthor',async t => {
  const receiveAuthorExpected = await booksLibrary.getAuthorById(1);
  const expectedActions = [
    {type: statusTypes.LOADING_STATUS},
    {type: types.RECEIVE_AUTHOR, author:receiveAuthorExpected}
  ];

  const store = mockStore({});



  /*return store.dispatch(authorActions.fetchAuthor(1)).then(()=>{
    console.log(store.getActions())
  });*/

  return store.dispatch(authorActions.fetchAuthor(1)).then((author)=>{
    t.deepEqual(store.getActions(), expectedActions)
    //  console.log(author);
   // t.deepEqual(store.getActions(), expectedActions)
  });

  /*return booksLibrary.getAuthorById(1).then((author)=> {
    //const expectedActions = {type: types.RECEIVE_AUTHOR, author};
    const expectedActions = [
      {type: statusTypes.LOADING_STATUS},
      {type: types.RECEIVE_AUTHOR, author}
    ];
    return store.dispatch(authorActions.fetchAuthor(1)).then(()=>{
    //  console.log(store.getActions());
      t.deepEqual(store.getActions(), expectedActions)
    });

  });*/
});