type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeatures(props: OfferFeaturesProps): JSX.Element {
  const {type, bedrooms, maxAdults} = props;

  return (
    <ul className="offer__features" data-testid="offer-features">
      <li className="offer__feature offer__feature--entire" data-testid="offer-entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms" data-testid="offer-bedrooms">
        {`${bedrooms} Bedrooms`}
      </li>
      <li className="offer__feature offer__feature--adults" data-testid="offer-adults">
        {`Max ${maxAdults} adults`}
      </li>
    </ul>
  );
}

export default OfferFeatures;
