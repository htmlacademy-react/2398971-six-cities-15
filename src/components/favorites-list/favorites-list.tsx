import { OffersList } from '../../types/offer';
import FavoritePlaceList from './favorites-place';
import FavoriteEmpty from './favorites-empty';

type FavoriteCardListProps = {
  offersList: OffersList[];
}

function FavoriteCardList(props: FavoriteCardListProps): JSX.Element {
  const { offersList } = props;
  const favoriteOffersList = offersList.filter((place)=> place.isFavorite);
  const favoriteCities = Array.from(new Set(favoriteOffersList.map((place) => place.city.name)));

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
              favoriteOffersList={favoriteOffersList.filter((place)=> place.city.name === city)}
            />))}
        </ul>
      </section>
    );
  }
}

export default FavoriteCardList;

