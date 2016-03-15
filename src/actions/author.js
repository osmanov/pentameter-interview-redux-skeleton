import {
    LOADING_STATUS,
    NETWORK_ERROR
}  from '../constants/status';
import * as types from '../constants/actionTypes';
import booksLibrary from '../api/booksLibrary.js';

function receiveAuthor(author) {
    return {
        type: types.RECEIVE_AUTHOR,
        author
    }
}

export function fetchAuthor(id) {
    return dispatch => {
        dispatch({
            type: LOADING_STATUS
        });

        booksLibrary.getAuthorById(id,author => {
            dispatch(receiveAuthor(author))
        })
    }
}







