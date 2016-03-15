import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import { authors } from './authors';
import { author } from './author';

export default combineReducers({
    router,
    authors,
    author
});


