import { useState } from 'react';
import { Nullable } from 'vitest';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../types/offer';
import Logo from '../../components/logo/logo';
import Offer from '../../components/offer/offer';
import NearPlaces from '../../components/near-places/near-places';
import { сurrentOffers } from '../../mock/сurrentOffer';
import { comments } from '../../mock/comments';
import { useAppSelector } from '../../hooks';
import HeaderNavList from '../../components/user-navigation/user-navigation-list';

type OfferScreenProps = {
  authorizationStatus: string;
}

function OfferScreen (props: OfferScreenProps): JSX.Element {
  const {authorizationStatus} = props;
  const offers = useAppSelector((state) => state.offers);

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferList>>(null);

  const handleOfferChange = (offer?: OfferList) => {
    setActiveOffer(offer || null);
  };

  const currentNearOffer = сurrentOffers.find(({ id }) => id === activeOffer?.id);
  // eslint-disable-next-line no-console
  console.log(currentNearOffer);

  const сurrentOffer = сurrentOffers[0];
  const nearOffers = offers.slice(1);


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
              <HeaderNavList/>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <Offer
          authorizationStatus={authorizationStatus}
          activeOffer={activeOffer}
          сurrentOffer={сurrentOffer}
          nearOffers={nearOffers}
          comments={comments}
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
