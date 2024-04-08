type OfferRatingProps = {
  className: string;
  rating: number;
}

function OfferRating(props:OfferRatingProps): JSX.Element {
  const {className, rating} = props;

  return (
    <div className={`${className}__rating rating`} data-testid="offer-rating">
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: `${Math.round(rating) / 5 * 100}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      {className === 'offer' ? <span className={`${className}__rating-value rating__value`}>{rating}</span> : ''}
    </div>
  );
}

export default OfferRating;
