type PropertyRatingProps = {
  value: number;
};

function PropertyRating({value}:PropertyRatingProps):JSX.Element {
  const percent = 20 * value;

  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `${percent}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{value}</span>
    </div>
  );
}

export default PropertyRating;
