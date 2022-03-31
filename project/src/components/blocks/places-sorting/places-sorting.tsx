import { useState } from 'react';
import SortOptions from './options/options';
import {SortType} from 'const';

type PlacesSortingType = {
  onChange: (item: SortType) => void;
  activeType: SortType;
};

function PlacesSorting({onChange, activeType}: PlacesSortingType):JSX.Element {
  const [isOpened, setOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">
        Sort by{' '}
      </span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => setOpened(!isOpened)}
      >
        {activeType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortOptions
        isOpened={isOpened}
        activeItem={activeType}
        onChange={(item) => {
          setOpened(!isOpened);
          onChange(item);
        }}
      />
    </form>
  );
}

export default PlacesSorting;
