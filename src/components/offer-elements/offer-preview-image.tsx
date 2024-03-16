type OfferPreviewImageProps = {
  previewImage: string;
  width: number;
  height: number;
}

function OfferPreviewImage({previewImage, width, height}: OfferPreviewImageProps): JSX.Element {

  return (
    <img
      className="place-card__image"
      src={previewImage}
      width={width}
      height={height}
      alt="Place image"
    />
  );
}

export default OfferPreviewImage;
