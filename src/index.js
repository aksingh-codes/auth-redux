import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App';
import reducers from './redux/reducers'

import { loadState, saveState } from './redux/localStorage'

const persistedState = loadState()
const store = createStore(reducers, persistedState)

// subscribe is invoked every time there is some changes in state { basically a listener }
store.subscribe(() => {
  console.log('invoked');
  saveState({
    auth: {
      isSignedIn: store.getState().auth.isSignedIn
    }
  })
})

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);