import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Week from './components/week';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Week />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
