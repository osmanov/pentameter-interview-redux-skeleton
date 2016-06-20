import {
    LOADING_STATUS,
    NETWORK_ERROR
}  from '../constants/status';
import * as types from '../constants/actionTypes';
import booksLibrary from '../api/booksLibrary.js';

function receiveAuthors(authors) {
  return {
    type: types.RECEIVE_AUTHORS,
    authors
  }
}

export function fetchAuthors() {
  return dispatch => {
    dispatch({
      type: LOADING_STATUS
    });
    return booksLibrary.getAuthors().then((authors)=>dispatch(receiveAuthors(authors)));
  }
}