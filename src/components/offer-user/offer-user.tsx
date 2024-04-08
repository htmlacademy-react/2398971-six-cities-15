import { User } from '../../types/offer';

type OfferUserProps = {
  className: string;
  user: User;
  width: number;
  height: number;
}

function OfferUser(props: OfferUserProps): JSX.Element {
  const {className, user, width, height} = props;
  const {isPro, name, avatarUrl} = user;

  return (
    <div className={`${className === 'offer' ? 'offer__host-user user' : `${className}__user user`}`} data-testid="offer-user">
      <div className={`${className}__avatar-wrapper ${isPro ? `${className}__avatar-wrapper--pro` : ''} user__avatar-wrapper`}>
        <img
          className={`${className}__avatar user__avatar`}
          src={avatarUrl}
          width={width}
          height={height}
          alt= {`${className === 'offer' ? 'Host avatar' : 'Reviews avatar'}`}
        />
      </div>
      <span className={`${className}__user-name`}>{name}</span>
      {isPro ? <span className={`${className}__user-status`}>Pro</span> : ''}
    </div>
  );
}

export default OfferUser;
