import { OffersList } from '../../types/offer';
import OfferCardPreview from './offer-card-preview';

type OfferCardListProps = {
  offersList: OffersList[];
}

function OfferCardList(props: OfferCardListProps): JSX.Element {
  const { offersList } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({length: offersList.length}, (_,index) => (
        <OfferCardPreview
          key={offersList[index].id}
          offer={offersList[index]}
        />))}
    </div>
  );
}


export default OfferCardList;
