import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

type OfferCardImageProps = {
  previewImage: string;
}

function OfferCardImage({previewImage}: OfferCardImageProps): JSX.Element {

  return (
    <Link to={AppRoute.Offer}>
      <img
        className="place-card__image"
        src={previewImage}
        width={260}
        height={200}
        alt="Place image"
      />
    </Link>
  );
}

export default OfferCardImage;
