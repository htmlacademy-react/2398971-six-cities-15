import { Nullable } from 'vitest';
import { CurrentOffer, OffersList } from '../../types/offer';
import { Comments } from '../../types/offer';
import OfferGallery from '../offer-elements/offer-gallery';
import OfferPremiumLogo from '../offer-elements/offer-premium-logo';
import OfferBookmark from '../offer-elements/offer-bookmark';
import OfferRating from '../offer-elements/offer-rating';
import OfferFeatures from '../offer-elements/offer-features';
import OfferPrice from '../offer-elements/offer-price';
import OfferInside from '../offer-elements/offer-inside';
import OfferUser from '../offer-elements/offer-user';
import OfferDescription from '../offer-elements/offer-description';
import OfferReviewForm from '../offer-elements/offer-review-form';
import OfferReviewsList from '../offer-elements/offer-reviews-list';
import Map from '../map/map';

type OfferReviewFormProps = {
  authorizationStatus: string;
  сurrentOffer: CurrentOffer;
  nearOffers: OffersList[];
  comments: Comments[];
  activeOffer: Nullable<OffersList>;
}

function Offer(props: OfferReviewFormProps): JSX.Element {
  const {authorizationStatus, сurrentOffer, nearOffers, comments, activeOffer} = props;
  const {title, description, type, price, images, city, goods, host, isFavorite, isPremium, rating, bedrooms, maxAdults} = сurrentOffer;

  return (
    <section className="offer">
      <OfferGallery images={images}/>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium ? <OfferPremiumLogo className="offer__mark" /> : ''}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <OfferBookmark
              isFavorite={isFavorite}
              className="offer"
              width={31}
              height={33}
            />
          </div>
          <OfferRating
            className="offer"
            rating={rating}
          />
          <OfferFeatures
            type={type}
            bedrooms={bedrooms}
            maxAdults={maxAdults}
          />
          <OfferPrice
            className="offer"
            price={price}
          />
          <OfferInside goods={goods}/>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <OfferUser
              className={'offer'}
              user={host}
              width={74}
              height={74}
            />
            <OfferDescription description={description}/>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{comments.length}</span>
            </h2>
            <OfferReviewsList
              comments={comments}
            />
            {authorizationStatus && <OfferReviewForm/>}
          </section>
        </div>
      </div>
      <section className="offer__map map">
        <Map
          city={city}
          offers={nearOffers}
          activeOffer={activeOffer}
        />
      </section>
    </section>
  );
}

export default Offer;
