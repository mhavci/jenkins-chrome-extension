import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';
import createStoreFunc from '../../app/store/configureStore';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  ReactDOM.render(
    <Root store={createStoreFunc(initialState)} />,
    document.querySelector('#root')
  );
});
