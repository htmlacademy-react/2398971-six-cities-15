import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cityChange } from '../../store/action';

function Locations(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Array.from({ length: CITIES.length}, (_,index) =>(
          <li key={CITIES[index].id} className="locations__item">
            <Link
              className={`locations__item-link tabs__item ${currentCity.name === CITIES[index].name ? 'tabs__item--active' : ''}`}
              onClick={(evt) => {
                evt.preventDefault();
                dispatch((cityChange({city: CITIES[index]})));
              }}
              to={AppRoute.Main}
            >
              <span>{CITIES[index].name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
