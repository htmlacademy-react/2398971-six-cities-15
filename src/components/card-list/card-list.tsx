import { memo } from 'react';
import { OfferList, OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';

type CardListProps = {
  offers: OffersList;
  handleOfferChange: (offer?: OfferList) => void;
  cardClassName: string;
}

function CardList(props: CardListProps): JSX.Element {
  const { offers, handleOfferChange, cardClassName } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardPreview
          handleMouseHover={handleOfferChange}
          key={offer.id}
          offer={offer}
          cardClassName={cardClassName}
        />
      ))}
    </div>
  );
}

export default memo(CardList);
