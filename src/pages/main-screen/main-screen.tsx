import { useState } from 'react';
import { Nullable } from 'vitest';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { getCurrentCity, getCurrentOffers, getCurrentSorting } from '../../store/offers-process/selectors';
import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import Locations from '../../components/locations/locations';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import SortingSelector from '../../utils/sorting';

function MainScreen (): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const currentOffers = useAppSelector(getCurrentOffers);
  const currentSorting = useAppSelector(getCurrentSorting);
  const sorteredOffers = SortingSelector(currentSorting.name);

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferList>>(null);

  const handleOfferChange = (offer?: OfferList) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов. Главная страница.</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
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
      </main>
    </div>
  );
}

export default MainScreen;
