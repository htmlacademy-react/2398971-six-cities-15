import { useState } from 'react';
import { SORTING } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortingChange } from '../../store/action';

function PlacesSorting(): JSX.Element {
  const [selectedSorting, setSelectedSorting] = useState(false);
  const currentSorting = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">
        {'Sort by '}
      </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={(evt) => {
          evt.preventDefault();
          setSelectedSorting(!selectedSorting);
        }}
      >
        {currentSorting.name}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${selectedSorting ? 'places__options--opened' : ''}`}>
        {Array.from({length: SORTING.length}, (_,index) => (
          <li
            key={SORTING[index].id}
            className={`places__option ${currentSorting.name === SORTING[index].name ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch((sortingChange({sorting: SORTING[index]})));
              setSelectedSorting(false);
            }}
          >
            {SORTING[index].name}
          </li>
        ))}

      </ul>
    </form>
  );
}

export default PlacesSorting;
