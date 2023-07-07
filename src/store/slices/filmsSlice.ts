import { createSlice } from '@reduxjs/toolkit';

import { type SwapiFilm } from '../../types/films';

export const sliceName = 'films';

const initialState: SwapiFilm[] = [];

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {}
});

export default slice.reducer;
