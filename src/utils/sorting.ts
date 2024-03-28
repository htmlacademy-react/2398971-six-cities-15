import { useAppSelector } from '../hooks';
import { getCurrentOffers } from '../store/temp-process/temp-selectors';

function SortingSelector (sortingType: string) {
  const currentOffers = useAppSelector(getCurrentOffers);

  switch (sortingType) {
    case 'Price: low to high':
      return currentOffers.toSorted((offerA, offerB) => offerA.price - offerB.price);
    case 'Price: high to low':
      return currentOffers.toSorted((offerA, offerB) => offerB.price - offerA.price);
    case 'Top rated first':
      return currentOffers.toSorted((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return currentOffers;
  }
}

export default SortingSelector;
