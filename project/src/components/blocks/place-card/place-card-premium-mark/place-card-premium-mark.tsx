
function PlaceCardPremiumMark({isActive}:Props):JSX.Element | null {
  return isActive
    ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )
    : null;
}

type Props = {
  isActive?: boolean;
}

export default PlaceCardPremiumMark;
