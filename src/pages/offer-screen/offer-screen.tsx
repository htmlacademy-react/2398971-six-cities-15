import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import UserLogin from '../../components/user-navigation/user-login';
import UserProfile from '../../components/user-navigation/user-profile';
import Offer from '../../components/offer/offer';
import NearPlaces from '../../components/near-places/near-places';

function OfferScreen (): JSX.Element {

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
        <Offer/>
        <NearPlaces/>
      </main>
    </div>
  );
}

export default OfferScreen;
