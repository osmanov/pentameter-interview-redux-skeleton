//import { createStore ,applyMiddleware} from 'redux'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

const logger=createLogger();
const createStoreWithMiddleware = compose(
    applyMiddleware(thunk,logger),
    reduxReactRouter({ createHistory })
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}



