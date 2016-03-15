import * as actionTypes from '../constants/actionTypes';

const initialState = {
    list: []
};


export function authors (state = initialState, action) {
        switch (action.type) {
            case actionTypes.RECEIVE_AUTHORS:
                let list=action.authors.map(author=>Object.assign({},author,{path:`/author/${author.id}`}));
                return {list};
            default:
                return state;
        }
};

