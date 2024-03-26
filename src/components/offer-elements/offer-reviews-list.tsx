import dayjs from 'dayjs';
import { Comments } from '../../types/offer';
import OfferRating from './offer-rating';
import OfferUser from './offer-user';

type OfferReviewsListProps = {
  comments: Comments;
}

function OfferReviewsList(props: OfferReviewsListProps): JSX.Element {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <li key={comment.id} className="reviews__item">
          <OfferUser
            className={'reviews'}
            user={comment.user}
            width={54}
            height={54}
          />
          <div className="reviews__info">
            <OfferRating
              className="reviews"
              rating={comment.rating}
            />
            <p className="reviews__text">
              {comment.comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">
              {dayjs(comment.date).format('MMMM DD')}
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OfferReviewsList;
