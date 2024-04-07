import { Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isUserAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (!isAuthChecked) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={isUserAuth ? <Navigate to={AppRoute.Main}/> : <LoginScreen/>}
        />
        <Route
          path={AppRoute.Main}
          element={<MainScreen/>}
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element={<OfferScreen authorizationStatus={authorizationStatus}/>}
        />
        <Route
          path='*'
          element={<ErrorScreen />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
