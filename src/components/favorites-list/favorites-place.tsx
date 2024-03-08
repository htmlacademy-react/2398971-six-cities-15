import { OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';

type FavoritePlaceProps = {
  favoriteOffersList: OffersList[];
  city: string;
  isFavoriteCard: boolean;
}

function FavoritePlaceList(props: FavoritePlaceProps): JSX.Element {
  const { city, favoriteOffersList, isFavoriteCard } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {Array.from({length: favoriteOffersList.length}, (_,index) => (
          <CardPreview
            key={favoriteOffersList[index].id}
            offer={favoriteOffersList[index]}
            isFavoriteCard={isFavoriteCard}
          />))}
      </div>
    </li>);
}

export default FavoritePlaceList;
