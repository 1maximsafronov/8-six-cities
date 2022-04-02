import { useAppDispatch, useAppSelector } from 'hooks';
import { getCurrentLocation } from 'store/selectors';
import { changeCity } from 'store/action';
import { locations } from 'const';
import TabItem from './item/item';

function Tabs():JSX.Element {
  const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector(getCurrentLocation);

  const onItemClick = (itemValue: string) => dispatch(changeCity(itemValue));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((item, index) => {
            const keyValue = `location-${item}`;
            return (
              <TabItem
                key={keyValue}
                value={item}
                isActive={selectedLocation === item}
                onClick={onItemClick}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
