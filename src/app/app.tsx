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
  сurrentOffer: CurrentOffer[];
  comments: Comments[];
}

function App ({offersList, сurrentOffer, comments}: AppScreenProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
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
            element={<MainScreen offersList={offersList}/>}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen />}
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