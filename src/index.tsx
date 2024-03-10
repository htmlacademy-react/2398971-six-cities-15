import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { offersList } from './mock/offers';
import { сurrentOffer } from './mock/сurrentOffer';
import { comments } from './mock/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersList = {offersList}
      сurrentOffer = {сurrentOffer}
      comments = {comments}
    />
  </React.StrictMode>
);
