import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { Setting } from './const';
import { offersList, сurrentOffer } from './mock/offers';
import { comments } from './mock/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placeCardCount = {Setting.PlaceCardCount}
      offersList = {offersList}
      сurrentOffer = {сurrentOffer}
      comments = {comments}
    />
  </React.StrictMode>
);
