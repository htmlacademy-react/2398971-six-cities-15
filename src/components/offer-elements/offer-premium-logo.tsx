type OfferPremiumLogoProps = {
  className: string;
}

function OfferPremiumLogo(props:OfferPremiumLogoProps): JSX.Element {
  const {className} = props;

  return (
    <div className={className} data-testid="premium-logo-test">
      <span>Premium</span>
    </div>
  );
}

export default OfferPremiumLogo;
