import classNames from 'classnames';

function PlaceCardBookmarkButton({isActive, onClick}: Props):JSX.Element {
  const bookmarkBtnClass = classNames(
    'place-card__bookmark-button button',
    {'place-card__bookmark-button--active' : isActive},
  );

  return (
    <button className={bookmarkBtnClass} type="button" onClick={onClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

type Props = {
  isActive: boolean;
  onClick?: () => void;
}

export default PlaceCardBookmarkButton;
