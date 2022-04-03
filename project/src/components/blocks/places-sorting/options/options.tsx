import classnames from 'classnames';
import { SortType } from 'const';
import SortOption from '../option-item/option-item';

type SortOptionsType = {
  activeItem: SortType;
  onChange: (item: SortType) => void;
  isOpened: boolean;
};

function SortOptions(props: SortOptionsType):JSX.Element {
  const {activeItem, onChange, isOpened} = props;
  const sortOptions = Object.values(SortType);

  const optionsClassName = classnames(
    'places__options places__options--custom ',
    {'places__options--opened': isOpened},
  );

  return (
    <ul className={optionsClassName}>
      {sortOptions.map((item) => (
        <SortOption
          key={`option-${item}`}
          item={item}
          isActive={item === activeItem}
          onClick={()=> onChange(item)}
        />
      ))}
    </ul>
  );
}

export default SortOptions;
