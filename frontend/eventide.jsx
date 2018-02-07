import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { createEvent } from './actions/event_actions';

document.addEventListener('DOMContentLoaded', () => {
  // console.log('entry file');
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;

  } else {
    store = configureStore();
  }
  // window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.createEvent = createEvent;
  // console.log('does it come back?');
  ReactDOM.render(<Root store={store} />, root);
});
