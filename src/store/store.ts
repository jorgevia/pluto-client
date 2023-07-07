import { configureStore } from '@reduxjs/toolkit';

import filmsReducer, { sliceName as filmsKey } from './slices/filmsSlice';
import peopleReducer, { sliceName as peopleKey } from './slices/peopleSlice';
import planetsReducer, { sliceName as planetsKey } from './slices/planetsSlice';
import speciesReducer, { sliceName as speciesKey } from './slices/speciesSlice';
import starshipsReducer, { sliceName as starshipsKey } from './slices/starshipsSlice';
import vehiclesReducer, { sliceName as vehiclesKey } from './slices/vehiclesSlice';

export const store = configureStore({
  reducer: {
    [peopleKey]: peopleReducer,
    [planetsKey]: planetsReducer,
    [starshipsKey]: starshipsReducer,
    [vehiclesKey]: vehiclesReducer,
    [speciesKey]: speciesReducer,
    [filmsKey]: filmsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
