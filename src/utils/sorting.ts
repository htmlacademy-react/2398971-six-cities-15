import { useAppSelector } from '../hooks';

function SortingSelector (sortingType: string) {
  const currentOffers = useAppSelector((state) => state.currentOffers);

  switch (sortingType) {
    case 'Price: low to high':
      return currentOffers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    case 'Price: high to low':
      return currentOffers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    case 'Top rated first':
      return currentOffers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return currentOffers;
  }
}

export default SortingSelector;
