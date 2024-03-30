import CardList from '../card-list/card-list';
import PlacesSorting from '../places-sorting/places-sorting';
import Map from '../map/map';
import { Cities, OfferList, OffersList } from '../../types/offer';
import { Nullable } from 'vitest';

type CitiesOffersProps = {
  currentCity: Cities;
  currentOffers: OffersList;
  sorteredOffers: OffersList;
  activeOffer: Nullable<OfferList>;
  handleOfferChange: (offer?: OfferList) => void;
}

function CitiesOffers(props: CitiesOffersProps): JSX.Element {
  const {currentOffers, sorteredOffers, currentCity, activeOffer, handleOfferChange} = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {`${currentOffers.length} places to stay in ${currentCity.name}`}
          </b>
          <PlacesSorting/>
          <div className="cities__places-list places__list tabs__content">
            <CardList
              handleOfferChange={handleOfferChange}
              offers={sorteredOffers}
              cardClassName = {'cities'}
            />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              city={currentCity}
              offers={currentOffers}
              activeOffer={activeOffer}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default CitiesOffers;
