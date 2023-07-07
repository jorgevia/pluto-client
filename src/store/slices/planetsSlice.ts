import { createSlice } from '@reduxjs/toolkit';

import { type SwapiPlanet } from '../../types/planets';

export const sliceName = 'planets';

const initialState: SwapiPlanet[] = [];

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {}
});

export default slice.reducer;
