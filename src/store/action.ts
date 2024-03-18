import {createAction} from '@reduxjs/toolkit';
import { Cities, Sorting } from '../types/offer';

export const cityChange = createAction<{city: Cities}>('city/cityChange');
export const offersContent = createAction('offers/offersContent');
export const sortingChange = createAction<{sorting: Sorting}>('sorting/offersContent');
