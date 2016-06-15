import test from 'ava';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import * as actionTypes from '../../constants/status';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureMockStore(middlewares);

test('#fetchAuthor', t => {
  const getState = {};
  const load = { type: 'LOADING_STATUS' };
  const store = mockStore(getState);
  store.dispatch(load);

  const actions = store.getActions();
  t.deepEqual(actions,[load]);
})

