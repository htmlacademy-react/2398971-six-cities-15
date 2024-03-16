import { useState } from 'react';
import { Nullable } from 'vitest';
import { OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';

type FavoritePlaceProps = {
  favoriteOffersList: OffersList[];
  city: string;
}

function FavoritePlaceList(props: FavoritePlaceProps): JSX.Element {
  const { city, favoriteOffersList } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<Nullable<OffersList>>(null);

  const handleMouseHover = (offer?: OffersList) => {
    setActiveOffer(offer || null);
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {Array.from({length: favoriteOffersList.length}, (_,index) => (
          <CardPreview
            handleMouseHover={handleMouseHover}
            key={favoriteOffersList[index].id}
            offer={favoriteOffersList[index]}
            cardClassName = {'favorites'}
          />))}
      </div>
    </li>);
}

export default FavoritePlaceList;
