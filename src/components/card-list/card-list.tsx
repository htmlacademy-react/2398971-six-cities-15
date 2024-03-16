import { OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';

type CardListProps = {
  offersList: OffersList[];
  handleOfferChange: (offer?: OffersList) => void;
  cardClassName: string;
}

function CardList(props: CardListProps): JSX.Element {
  const { offersList, handleOfferChange, cardClassName } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({length: offersList.length}, (_,index) => (
        <CardPreview
          handleMouseHover={handleOfferChange}
          key={offersList[index].id}
          offer={offersList[index]}
          cardClassName={cardClassName}
        />))}
    </div>
  );
}

export default CardList;
