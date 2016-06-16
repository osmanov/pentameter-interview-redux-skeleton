import test from 'ava';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import * as actionTypes from '../../constants/status';
import * as authorActions from '../../actions/author';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('#loadAuthor', t => {
  const getState = {};
  const expectedActions = { type: actionTypes.LOADING_STATUS};
  const store = mockStore(getState);
  t.deepEqual(store.dispatch(authorActions.loadAuthor()), expectedActions)
});

