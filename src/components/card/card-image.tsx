type CardImageProps = {
  previewImage: string;
  width: number;
  height: number;
}

function CardImage({previewImage, width, height}: CardImageProps): JSX.Element {

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

export default CardImage;
