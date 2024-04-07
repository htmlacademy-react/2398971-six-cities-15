import { OfferList, OffersList } from '../../types/offer';
import MemoizeCardPreview from '../card-preview/card-preview';

type NearPlacesProps = {
  nearOffers: OffersList;
  handleOfferChange: (offer?: OfferList) => void;
  cardClassName: string;
}

function NearPlaces(props:NearPlacesProps): JSX.Element {
  const {nearOffers, handleOfferChange, cardClassName} = props;

  return (
    <div className="container" data-testid="near-places-container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearOffers.map((offer) => (
            <MemoizeCardPreview
              handleMouseHover={handleOfferChange}
              key={offer.id}
              offer={offer}
              cardClassName={cardClassName}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
