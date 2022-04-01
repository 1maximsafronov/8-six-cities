import classNames from 'classnames';

function PropertyBookmarkBtn({isActive = false}:PropertyBookmarkBtnProps):JSX.Element {

  const btnClassName = classNames(
    'property__bookmark-button button',
    {'property__bookmark-button--active': isActive},
  );

  return (
    <button className={btnClassName} type="button">
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

type PropertyBookmarkBtnProps = {
  isActive?: boolean;
};

export default PropertyBookmarkBtn;
