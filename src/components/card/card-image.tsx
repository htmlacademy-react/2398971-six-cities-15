import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

type CardImageProps = {
  previewImage: string;
  width: number;
  height: number;
}

function CardImage({previewImage, width, height}: CardImageProps): JSX.Element {

  return (
    <Link to={AppRoute.Offer}>
      <img
        className="place-card__image"
        src={previewImage}
        width={width}
        height={height}
        alt="Place image"
      />
    </Link>
  );
}

export default CardImage;
