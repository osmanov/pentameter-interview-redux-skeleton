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

export function loadAuthor(){
    return dispatch => {
        return {
            type: LOADING_STATUS
        }
    }
}

export function fetchAuthor(id) {
    return dispatch => {
        loadAuthor();

        booksLibrary.getAuthorById(id,author => {
            dispatch(receiveAuthor(author))
        })
    }
}







