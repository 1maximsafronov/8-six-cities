import classNames from 'classnames';

function PropertyBookmarkBtn({isActive = false, onClick}:Props):JSX.Element {

  const btnClassName = classNames(
    'property__bookmark-button button',
    {'property__bookmark-button--active': isActive},
  );

  return (
    <button className={btnClassName} type="button" onClick={onClick}>
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

type Props = {
  isActive?: boolean;
  onClick: () => void
};

export default PropertyBookmarkBtn;
