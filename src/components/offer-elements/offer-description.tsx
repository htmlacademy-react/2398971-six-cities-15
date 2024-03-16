type OfferDescriptionProps = {
  description: string;
}

function OfferDescription(props: OfferDescriptionProps): JSX.Element {
  const {description} = props;
  const splitedDescription = description.split('.');

  return (
    <div className="offer__description">
      { Array.from({ length:splitedDescription.length }, (_,index) => (
        <p key={index} className="offer__text"> {`${splitedDescription[index]}.`}</p>
      ))}
    </div>
  );
}

export default OfferDescription;
