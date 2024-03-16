import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import ErrorScreen from '../pages/error-screen/error-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import MainScreen from '../pages/main-screen/main-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import PrivateRoute from '../components/private-route/private-route';
import { OffersList, CurrentOffer } from '../types/offer';
import { Comments } from '../types/comment';

type AppScreenProps = {
  offersList: OffersList[];
  сurrentOffers: CurrentOffer[];
  comments: Comments[];
}

function App ({offersList, сurrentOffers, comments}: AppScreenProps): JSX.Element {

  const authorizationStatus = AuthorizationStatus.Auth;

  // eslint-disable-next-line no-console
  console.log(сurrentOffers);
  // eslint-disable-next-line no-console
  console.log(comments);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesScreen offersList={offersList}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Main}
            element={<MainScreen offersList={offersList} сurrentOffers={сurrentOffers} />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen authorizationStatus={authorizationStatus}/>}
          />
          <Route
            path='*'
            element={<ErrorScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
