import { locations } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeCity } from '../../../store/action';
import classNames from 'classnames';

function Tabs():JSX.Element {
  const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector((state) => state.currentLocation);

  const onItemClick = (itemValue: string) => {
    dispatch(changeCity(itemValue));
  };
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((item, index) => {
            const keyValue = `location-${item}`;
            return (
              <li key={keyValue} className="locations__item">
                <a href={`#${item}`}
                  className={classNames('locations__item-link tabs__item',
                    {'tabs__item--active': selectedLocation === item})}
                  onClick={(evt) => {
                    evt.preventDefault();
                    onItemClick(item);
                  }}
                >
                  <span>{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
