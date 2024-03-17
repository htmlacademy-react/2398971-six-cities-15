import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './app/app';
import { offersList } from './mock/offers';
import { сurrentOffers } from './mock/сurrentOffer';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offersList = {offersList}
        сurrentOffers = {сurrentOffers}
      />
    </Provider>
  </React.StrictMode>
);
