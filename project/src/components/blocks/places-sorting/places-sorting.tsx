import { useState } from 'react';
import classNames from 'classnames';

function PlacesSorting():JSX.Element {
  const [isOpened, setOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => setOpened(!isOpened)}
      >
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames(
        'places__options places__options--custom ',
        {'places__options--opened': isOpened},
      )}
      >
        <li className="places__option places__option--active" tabIndex={0}>
                    Popular
        </li>
        <li className="places__option" tabIndex={0}>
                    Price: low to high
        </li>
        <li className="places__option" tabIndex={0}>
                    Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
                    Top rated first
        </li>
      </ul>
    </form>
  );
}

export default PlacesSorting;
