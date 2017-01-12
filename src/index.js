import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import TodoApp from 'TodoApp';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <TodoApp/>
  , document.querySelector('.container'));
