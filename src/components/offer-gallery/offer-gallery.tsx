type OfferGalleryProps = {
  images: string[];
}

function OfferGallery(props: OfferGalleryProps): JSX.Element {
  const {images} = props;

  return (
    <div className="offer__gallery-container container" data-testid="gallery-container">
      <div className="offer__gallery">
        { Array.from({ length:images.length }, (_,index) => (
          <div
            className="offer__image-wrapper"
            data-testid="offer-image"
            key={index}
          >
            <img
              className="offer__image"
              src={images[index]}
              alt="Photo studio"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
