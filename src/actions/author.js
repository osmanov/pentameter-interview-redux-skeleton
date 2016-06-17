import {
    LOADING_STATUS,
    NETWORK_ERROR
}  from '../constants/status';
import * as types from '../constants/actionTypes';
import booksLibrary from '../api/booksLibrary.js';

export function receiveAuthor(author) {
  return {
    type: types.RECEIVE_AUTHOR,
    author
  }
}

export function loadAuthor() {
  return {
    type: LOADING_STATUS
  }
}

export function fetchAuthor(id) {
  return dispatch => {
    dispatch(loadAuthor());
    return booksLibrary.getAuthorById(id).then((author)=>dispatch(receiveAuthor(author)))
  }
}
