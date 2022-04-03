import { useState } from 'react';

import {SortType} from 'const';

import SortOptions from './options/options';

function PlacesSorting({onChange, activeType}: PlacesSortingType):JSX.Element {
  const [isOpened, setOpened] = useState(false);

  const onOptionChange = (item: SortType) => {
    setOpened(false);
    onChange(item);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by{' '}</span>
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
        onChange={onOptionChange}
      />
    </form>
  );
}

type PlacesSortingType = {
  onChange: (item: SortType) => void;
  activeType: SortType;
};

export default PlacesSorting;
