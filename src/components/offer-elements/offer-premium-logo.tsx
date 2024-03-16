type OfferPremiumLogoProps = {
  className: string;
}

function OfferPremiumLogo(props:OfferPremiumLogoProps): JSX.Element {
  const {className} = props;

  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default OfferPremiumLogo;
