type OfferDescriptionProps = {
  description: string;
}

function OfferDescription(props: OfferDescriptionProps): JSX.Element {
  const {description} = props;
  const splitDescription = description.split('.');

  return (
    <div className="offer__description">
      { Array.from({ length:splitDescription.length }, (_,index) => (
        <p key={index} className="offer__text"> {`${splitDescription[index]}.`}</p>
      ))}
    </div>
  );
}

export default OfferDescription;
