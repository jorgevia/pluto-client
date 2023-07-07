import { configureStore } from '@reduxjs/toolkit';

import { swapiApi as api } from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
