import classNames from 'classnames';
import { MouseEvent } from 'react';

function TabItem(props:TabItemProps):JSX.Element {

  const {onClick, value, isActive} =props;

  const className = classNames(
    'locations__item-link tabs__item',
    {'tabs__item--active': isActive});


  const clickHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick(value);
  };

  return (
    <li className="locations__item">
      <a onClick={clickHandler} href={`#${value}`} className={className} >
        <span>{value}</span>
      </a>
    </li>
  );

}

type TabItemProps = {
  onClick: (value: string) => void,
  value: string;
  isActive: boolean;
}


export default TabItem;
