import { OffersList } from '../../types/offer';
import FavoritePlaceList from './favorites-place';
import FavoriteEmpty from './favorites-empty';

type FavoriteCardListProps = {
  offers: OffersList;
}

function FavoriteCardList(props: FavoriteCardListProps): JSX.Element {
  const { offers } = props;
  const favoriteOffers = offers.filter((place)=> place.isFavorite);
  const favoriteCities = Array.from(new Set(favoriteOffers.map((place) => place.city.name)));

  if (favoriteCities.length === 0) {

    return (
      <FavoriteEmpty />
    );
  } else {

    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favoriteCities.map((city)=>(
            <FavoritePlaceList
              key={city}
              city={city}
              favoriteOffers={favoriteOffers.filter((place)=> place.city.name === city)}
            />))}
        </ul>
      </section>
    );
  }
}

export default FavoriteCardList;

