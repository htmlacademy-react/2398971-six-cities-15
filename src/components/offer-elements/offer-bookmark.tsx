import { ReactEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSwitchFavoriteOffer } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

type OfferBookmarkProps = {
  offerId:string;
  isFavorite: boolean;
  className:string;
  width: number;
  height: number;
}

type TChangeHandleReview = ReactEventHandler<HTMLButtonElement>

function OfferBookmark(props: OfferBookmarkProps): JSX.Element {
  const {offerId, className, width, height} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleFavoriteChange: TChangeHandleReview = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.Auth) {
      setIsFavorite(!isFavorite);
      dispatch(fetchSwitchFavoriteOffer({
        offerId: offerId,
        status: isFavorite ? 0 : 1,
      }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={isFavorite ? `${className}__bookmark-button ${className}__bookmark-button--active button` : `${className}__bookmark-button button`}
      type="button"
      onClick={handleFavoriteChange}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default OfferBookmark;
