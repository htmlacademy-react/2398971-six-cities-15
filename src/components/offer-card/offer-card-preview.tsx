import { OffersList } from '../../types/offer';
import OfferCardPremiumLogo from './offer-card-premium-logo';
import OfferCardImage from './offer-card-image';
import OfferCardName from './offer-card-name';
import OfferCardBookmark from './offer-card-bookmark';

type OfferCardPreviewProps = {
  offer: OffersList;
}

function OfferCardPreview (props: OfferCardPreviewProps): JSX.Element {
  const { offer } = props;
  const { title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  return (
    <article className="cities__card place-card">
      {isPremium ? <OfferCardPremiumLogo /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <OfferCardImage
          previewImage={previewImage}
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <OfferCardBookmark
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
          <OfferCardName
            title={title}
          />
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default OfferCardPreview;
