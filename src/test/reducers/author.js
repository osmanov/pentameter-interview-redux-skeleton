import test from 'ava';
import booksLibrary from '../../api/booksLibrary.js';
import * as statusTypes from '../../constants/status';
import * as types from '../../constants/actionTypes';
import * as authorActions from '../../actions/author';
import * as reducer  from '../../reducers/author';

test('returns the default author state', t => {
  t.deepEqual(reducer.author(undefined, {}), {});
});

test('returns the state with the passed author', t => {
  let author = {name: 'random name'};
  t.deepEqual(reducer.author(undefined, {
    type: types.RECEIVE_AUTHOR,
    author
  }), author);
});