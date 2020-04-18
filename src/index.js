import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools());

const router = <BrowserRouter><App></App></BrowserRouter>

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {router}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
