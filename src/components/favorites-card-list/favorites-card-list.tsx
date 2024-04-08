import { OffersList } from '../../types/offer';
import FavoritesPlaceList from '../favorites-list/favorites-place-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

type FavoritesCardListProps = {
  offers: OffersList;
}

function FavoritesCardList(props: FavoritesCardListProps): JSX.Element {
  const { offers } = props;
  const favoriteOffers = offers.filter((place)=> place.isFavorite);
  const favoriteCities = Array.from(new Set(favoriteOffers.map((place) => place.city.name)));

  if (favoriteCities.length === 0) {

    return (
      <FavoritesEmpty />
    );
  } else {

    return (
      <section className="favorites" data-testId="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favoriteCities.map((city)=>(
            <FavoritesPlaceList
              key={city}
              city={city}
              favoriteOffers={favoriteOffers.filter((place)=> place.city.name === city)}
            />))}
        </ul>
      </section>
    );
  }
}

export default FavoritesCardList;

