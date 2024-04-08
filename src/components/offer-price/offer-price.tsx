type OfferPriceProps = {
  className: string;
  price: number;
}

function OfferPrice(props: OfferPriceProps): JSX.Element {
  const {className, price} = props;

  return (
    <div className={`${className}__price`} data-testid="offer-price">
      <b className={`${className}__price-value`}>&euro;{`${price} `}</b>

      {className === 'offer' ?
        <span className={`${className}__price-text`}>&nbsp; night</span> :
        <span className={`${className}__price-text`}>&#47;&nbsp;night</span>}

    </div>
  );
}

export default OfferPrice;
