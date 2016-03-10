import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import { authors } from './authors';

export default combineReducers({
    router,
    authors
});
