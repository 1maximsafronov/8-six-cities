type PropertyPriceProps = {
  value: number;
};

function PropertyPrice({value}:PropertyPriceProps):JSX.Element {
  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{value}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}

export default PropertyPrice;
