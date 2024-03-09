import { useState } from 'react';
import { OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';
import { Nullable } from 'vitest';

type CardListProps = {
  offersList: OffersList[];
}

function CardList(props: CardListProps): JSX.Element {
  const { offersList } = props;
  const isFavoriteCard = false;
  const [activeOffer, setActiveOffer] = useState<Nullable<OffersList>>(null);

  // eslint-disable-next-line no-console
  console.log(activeOffer);

  const handleMouseHover = (offer?: OffersList) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({length: offersList.length}, (_,index) => (
        <CardPreview
          handleMouseHover={handleMouseHover}
          key={offersList[index].id}
          offer={offersList[index]}
          isFavoriteCard={isFavoriteCard}
        />))}
    </div>
  );
}


export default CardList;
