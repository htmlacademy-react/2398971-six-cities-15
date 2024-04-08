import { FormEvent, Fragment, ReactEventHandler, memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNewCommentAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getSendNewCommentDataLoadingStatus } from '../../store/comments-process/selectors';

type TChangeHandleReview = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

const rating = [
  {value: 5, label: 'perfect' },
  {value: 4, label: 'good' },
  {value: 3, label: 'not bad' },
  {value: 2, label: 'badly' },
  {value: 1, label: 'terribly' },
];

function OfferReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const {offerId} = useParams();
  const isSendNewCommentDataLoading = useAppSelector(getSendNewCommentDataLoadingStatus);

  const [review, setReview] = useState({rating: 0, review: ''});

  const handleReviewChange: TChangeHandleReview = (event) => {
    const {name, value} = event.currentTarget;
    setReview({...review,[name]:value});
  };

  const handleCommentSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (offerId || review.review.length < 50 || review.review.length > 300 || review.rating === 0) {
      dispatch(fetchNewCommentAction({
        offerId: offerId,
        comment: review.review,
        rating: Number(review.rating),
      }));
      setReview({rating: 0, review: ''});
    }
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleCommentSubmit}
      data-testid="reviews-form"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({value, label}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              checked={Number(review.rating) === value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleReviewChange}
              disabled={isSendNewCommentDataLoading}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}

      </div>
      <textarea
        onChange={handleReviewChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.review}
        disabled={isSendNewCommentDataLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
              To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
              your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.review.length < 50 || review.review.length > 300 || review.rating === 0 || isSendNewCommentDataLoading}
        >
          {isSendNewCommentDataLoading ? 'Submitting' : 'Submit' }
        </button>
      </div>
    </form>
  );
}

const MemoizeOfferReviewForm = memo(OfferReviewForm);

export default MemoizeOfferReviewForm;
