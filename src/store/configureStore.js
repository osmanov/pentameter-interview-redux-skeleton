import { createStore ,applyMiddleware} from 'redux'
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const logger=createLogger();

  const store = createStore(rootReducer,initialState,applyMiddleware(thunk,logger));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
