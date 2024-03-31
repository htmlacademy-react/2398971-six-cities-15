import { memo, useState } from 'react';
import { SORTING } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentSorting } from '../../store/offers-process/selectors';
import { sortingChange } from '../../store/offers-process/offers-process';

function PlacesSorting(): JSX.Element {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const currentSorting = useAppSelector(getCurrentSorting);
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
          setIsOptionsOpened(!isOptionsOpened);
        }}
      >
        {currentSorting.name}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOptionsOpened ? 'places__options--opened' : ''}`}>
        {SORTING.map((sort) => (
          <li
            key={sort.id}
            className={`places__option ${currentSorting.name === sort.name ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch((sortingChange(sort)));
              setIsOptionsOpened(false);
            }}
          >
            {sort.name}
          </li>
        ))}

      </ul>
    </form>
  );
}

export default memo(PlacesSorting);
