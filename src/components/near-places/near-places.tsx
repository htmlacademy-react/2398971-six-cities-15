import { OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';

type NearPlacesProps = {
  nearOffers: OffersList[];
  handleOfferChange: (offer?: OffersList) => void;
  cardClassName: string;
}

function NearPlaces(props:NearPlacesProps): JSX.Element {
  const {nearOffers, handleOfferChange, cardClassName} = props;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {Array.from({length: nearOffers.length}, (_,index) => (
            <CardPreview
              handleMouseHover={handleOfferChange}
              key={nearOffers[index].id}
              offer={nearOffers[index]}
              cardClassName={cardClassName}
            />))}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
