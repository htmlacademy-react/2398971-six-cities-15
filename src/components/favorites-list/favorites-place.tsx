import { OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';

type FavoritePlaceProps = {
  favoriteOffers: OffersList;
  city: string;
}

function FavoritePlaceList(props: FavoritePlaceProps): JSX.Element {
  const { city, favoriteOffers } = props;
  const handleMouseHover = () => {};

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
        {favoriteOffers.map((offer) => (
          <CardPreview
            handleMouseHover={handleMouseHover}
            key={offer.id}
            offer={offer}
            cardClassName = {'favorites'}
          />
        ))}
      </div>
    </li>);
}

export default FavoritePlaceList;
