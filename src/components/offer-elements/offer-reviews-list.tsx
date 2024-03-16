import dayjs from 'dayjs';
import { Comments } from '../../types/offer';
import OfferRating from './offer-rating';
import OfferUser from './offer-user';

type OfferReviewsListProps = {
  comments: Comments[];
}

function OfferReviewsList(props: OfferReviewsListProps): JSX.Element {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {Array.from({length: comments.length}, (_,index) => (
        <li key={index} className="reviews__item">
          <OfferUser
            className={'reviews'}
            user={comments[index].user}
            width={54}
            height={54}
          />
          <div className="reviews__info">
            <OfferRating
              className="reviews"
              rating={comments[index].rating}
            />
            <p className="reviews__text">
              {comments[index].comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">
              {dayjs(comments[index].date).format('MMMM DD')}
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OfferReviewsList;
