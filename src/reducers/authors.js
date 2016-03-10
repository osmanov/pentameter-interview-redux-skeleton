import * as actionTypes from 'constants/actionTypes';

const initialState = {
    list: []
};

const authors = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.RECEIVE_AUTHORS:
                let { objects } = action.data;
                let list = objects.reduce((c, { author }) => [...c, ...author], []);

                return {list};

            default:
                return state;
        }
};

export default authors;
