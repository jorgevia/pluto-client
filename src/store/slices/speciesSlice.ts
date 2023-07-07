import { createSlice } from '@reduxjs/toolkit';

import { type SwapiSpecies } from '../../types/species';

export const sliceName = 'species';

const initialState: SwapiSpecies[] = [];

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {}
});

export default slice.reducer;
