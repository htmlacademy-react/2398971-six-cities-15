import {createAction} from '@reduxjs/toolkit';
import { Cities } from '../types/offer';

export const cityChange = createAction<{city: Cities}>('city/cityChange');
export const offersContent = createAction('offers/offersContent');
