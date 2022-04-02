

function PropertyFeatures(props:PropertyFeaturesProps):JSX.Element {
  const {bedrooms, maxAdults, type} = props;

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

type PropertyFeaturesProps = {
  bedrooms: number;
  maxAdults: number;
  type: string;
}

export default PropertyFeatures;
