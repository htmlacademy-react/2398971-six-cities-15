import { OffersList } from '../../types/offer';
import CardPremiumLogo from './card-premium-logo';
import CardImage from './card-image';
import CardName from './card-name';
import CardBookmark from './card-bookmark';

type CardPreviewProps = {
  offer: OffersList;
  isFavoriteCard: boolean;
  handleMouseHover: (offer?: OffersList) => void;
}

function CardPreview (props: CardPreviewProps): JSX.Element {
  const { offer, isFavoriteCard, handleMouseHover} = props;
  const { title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  const handleMouseOn = () => {
    handleMouseHover(offer);
  };

  const handleMouseOff = () => {
    handleMouseHover();
  };

  return (
    <article
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
      className={isFavoriteCard ? 'favorites__card place-card' : 'cities__card place-card'}
    >
      {isPremium ? <CardPremiumLogo /> : ''}
      <div className={isFavoriteCard ? 'favorites__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <CardImage
          previewImage={previewImage}
          width={isFavoriteCard ? 150 : 260}
          height={isFavoriteCard ? 110 : 200}
        />
      </div>
      <div className={isFavoriteCard ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <CardBookmark
            isFavorite={isFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rating / 5 * 100}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <CardName
            title={title}
          />
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default CardPreview;
