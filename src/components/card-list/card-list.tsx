import { OffersList } from '../../types/offer';
import CardPreview from '../card/card-preview';

type CardListProps = {
  offersList: OffersList[];
}

function CardList(props: CardListProps): JSX.Element {
  const { offersList } = props;
  const isFavoriteCard = false;

  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({length: offersList.length}, (_,index) => (
        <CardPreview
          key={offersList[index].id}
          offer={offersList[index]}
          isFavoriteCard={isFavoriteCard}
        />))}
    </div>
  );
}


export default CardList;
