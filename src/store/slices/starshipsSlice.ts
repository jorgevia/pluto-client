import { createSlice } from '@reduxjs/toolkit';

import { type SwapiStarship } from '../../types/starships';

export const sliceName = 'starships';

const initialState: SwapiStarship[] = [];

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {}
});

export default slice.reducer;
