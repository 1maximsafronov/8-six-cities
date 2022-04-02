
type PropertyGalleryProps = {
  images: string[];
}

function PropertyGallery({images}:PropertyGalleryProps):JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, index) => {
          const keyValue = `image-${index}`;
          return (
            <div key={keyValue} className="property__image-wrapper">
              <img className="property__image" src={image} alt="Photo studio" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PropertyGallery;
