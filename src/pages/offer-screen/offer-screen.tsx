import { useState } from 'react';
import { Nullable } from 'vitest';
import { Helmet } from 'react-helmet-async';
import { OffersList } from '../../types/offer';
import Logo from '../../components/logo/logo';
import UserLogin from '../../components/user-navigation/user-login';
import UserProfile from '../../components/user-navigation/user-profile';
import Offer from '../../components/offer/offer';
import NearPlaces from '../../components/near-places/near-places';
import { offersList } from '../../mock/offers';
import { сurrentOffers } from '../../mock/сurrentOffer';
import { comments } from '../../mock/comments';

type OfferScreenProps = {
  authorizationStatus: string;
}

function OfferScreen (props: OfferScreenProps): JSX.Element {
  const {authorizationStatus} = props;

  const [activeOffer, setActiveOffer] = useState<Nullable<OffersList>>(null);

  const handleOfferChange = (offer?: OffersList) => {
    setActiveOffer(offer || null);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentNearOffer = сurrentOffers.find(({ id }) => id === activeOffer?.id);

  const сurrentOffer = сurrentOffers[0];

  //const nearOffers: OffersList[] = сurrentOffers.slice(1).map((nearOffer) => offersList.find((offer)=> offer.id === nearOffer.id));
  const nearOffers = offersList.slice(1);


  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Предложения.</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserProfile />
                </li>
                <li className="header__nav-item">
                  <UserLogin />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <Offer
          authorizationStatus={authorizationStatus}
          сurrentOffer={сurrentOffer}
          nearOffers={nearOffers}
          comments={comments}
          activeOffer={activeOffer}
        />
        <NearPlaces
          handleOfferChange={handleOfferChange}
          nearOffers={nearOffers}
          cardClassName="near-places"
        />
      </main>
    </div>
  );
}

export default OfferScreen;
