type OfferInsideProps = {
  goods: string[];
}

function OfferInside(props:OfferInsideProps): JSX.Element {
  const {goods} = props;

  return (
    <div className="offer__inside" data-testid="offer-inside">
      <h2 className="offer__inside-title">{'What\'s inside'}</h2>
      <ul className="offer__inside-list">
        {Array.from({length: goods.length}, (_,index) => (
          <li
            key={index}
            className="offer__inside-item"
            data-testid="offer-inside-item"
          >
            {goods[index]}
          </li>

        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
