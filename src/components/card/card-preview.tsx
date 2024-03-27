import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferList } from '../../types/offer';
import OfferPremiumLogo from '../offer-elements/offer-premium-logo';
import OfferPreviewImage from '../offer-elements/offer-preview-image';
import OfferBookmark from '../offer-elements/offer-bookmark';
import OfferRating from '../offer-elements/offer-rating';
import OfferPrice from '../offer-elements/offer-price';

type CardPreviewProps = {
  offer: OfferList;
  handleMouseHover: (offer?: OfferList) => void;
  cardClassName: string;
}

function CardPreview (props: CardPreviewProps): JSX.Element {
  const { offer, handleMouseHover, cardClassName} = props;
  const { id, title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  const handleMouseOn = () => {
    handleMouseHover(offer);
  };

  const handleMouseOff = () => {
    handleMouseHover();
  };

  return (
    <Link to={`${AppRoute.Offer}/${id}`}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
      className={`${cardClassName}__card place-card`}
    >
      {isPremium ? <OfferPremiumLogo className="place-card__mark"/> : ''}
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <OfferPreviewImage
          previewImage={previewImage}
          width={cardClassName === 'favorites' ? 150 : 260}
          height={cardClassName === 'favorites' ? 110 : 200}
        />
      </div>
      <div className={cardClassName === 'favorites' ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <OfferPrice
            className="place-card"
            price={price}
          />
          <OfferBookmark
            offerId={id}
            isFavorite={isFavorite}
            className="place-card"
            width={18}
            height={19}
          />
        </div>
        <OfferRating
          className="place-card"
          rating={rating}
        />
        <h2 className="place-card__name">
          {title}
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </Link>
  );
}

export default CardPreview;
//isFavoriteCard ? 'favorites__card-info place-card__info' : 'place-card__info'
