import { OfferList, OffersList } from '../../types/offer';
import MemoizeCardPreview from '../card-preview/card-preview';

type CardListProps = {
  offers: OffersList;
  handleOfferChange: (offer?: OfferList) => void;
  cardClassName: string;
}

function CardList(props: CardListProps): JSX.Element {
  const { offers, handleOfferChange, cardClassName } = props;

  return (
    <div className="cities__places-list places__list tabs__content" data-testid="cities-places-list">
      {offers.map((offer) => (
        <MemoizeCardPreview
          handleMouseHover={handleOfferChange}
          key={offer.id}
          offer={offer}
          cardClassName={cardClassName}
        />
      ))}
    </div>
  );
}

export default CardList;
