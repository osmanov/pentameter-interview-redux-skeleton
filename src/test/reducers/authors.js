import test from 'ava';
import booksLibrary from '../../api/booksLibrary.js';
import * as statusTypes from '../../constants/status';
import * as types from '../../constants/actionTypes';
import * as authorsActions from '../../actions/authors';
import * as reducer  from '../../reducers/authors';

test('returns the default authors state', t => {
  t.deepEqual(reducer.authors(undefined, {}), {list: []});
});

test('returns the state with the passed list of authors', async t => {
  let authors = await booksLibrary.getAuthors();
  authors.forEach(author=>author.path = `/author/${author.id}`);
  t.deepEqual(reducer.authors(undefined, {
    type: types.RECEIVE_AUTHORS,
    authors
  }), {list: authors});
});