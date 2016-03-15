import * as actionTypes from '../constants/actionTypes';

const initialState = {};


export function author (state = initialState, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_AUTHOR:
            return Object.assign({},action.author);
        default:
            return state;
    }
};


