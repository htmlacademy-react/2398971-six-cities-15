import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

type CardNameProps = {
  title: string;
}

function CardName({title}: CardNameProps): JSX.Element {

  return (
    <Link to={AppRoute.Offer}>
      {title}
    </Link>
  );
}

export default CardName;
