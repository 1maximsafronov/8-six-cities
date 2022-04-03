

function PropertyPremiumMark({isActive}:Props):JSX.Element | null {

  if (!isActive) {
    return null;
  }

  return (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );
}

type Props = {
  isActive: boolean;
}

export default PropertyPremiumMark;
