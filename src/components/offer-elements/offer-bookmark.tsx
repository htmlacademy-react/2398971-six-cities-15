type OfferBookmarkProps = {
  isFavorite: boolean;
  className:string;
  width: number;
  height: number;
}

function OfferBookmark(props: OfferBookmarkProps): JSX.Element {
  const {isFavorite, className, width, height} = props;

  return (
    <button
      className={isFavorite ? `${className}__bookmark-button ${className}__bookmark-button--active button` : `${className}__bookmark-button button`}
      type="button"
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
