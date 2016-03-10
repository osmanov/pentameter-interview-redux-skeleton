import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './containers/App';
import Author from './containers/Author';
import Selection from './containers/Selection';
import { createHistory } from 'history';



let history = createHistory();

const store = configureStore();

render(
  <Provider store={store}>
      <Router history={history}>
          <ReduxRouter>
              <Route path="/" component={App}>
                  <Route path="/selection" component={Selection} />
                  <Route path="/author/:id" component={Author} />
              </Route>
          </ReduxRouter>
      </Router>
  </Provider>,

  document.getElementById('container')
);


