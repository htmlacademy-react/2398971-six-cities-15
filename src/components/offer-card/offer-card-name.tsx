import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

type OfferCardNameProps = {
  title: string;
}

function OfferCardName({title}: OfferCardNameProps): JSX.Element {

  return (
    <Link to={AppRoute.Offer}>
      {title}
    </Link>
  );
}

export default OfferCardName;
