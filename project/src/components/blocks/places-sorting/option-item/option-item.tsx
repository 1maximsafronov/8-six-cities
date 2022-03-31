import classnames from 'classnames';

type SortOptionsType = {
  onClick: () => void;
  isActive: boolean;
  item: string;
};

function SortOptions({item, onClick, isActive}: SortOptionsType):JSX.Element {
  const optionClassName = classnames('places__option', {
    'places__option--active': isActive,
  });

  return (
    <li className={optionClassName} tabIndex={0} onClick={onClick}>
      {item}
    </li>
  );
}

export default SortOptions;
