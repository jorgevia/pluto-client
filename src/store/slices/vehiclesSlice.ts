import { createSlice } from '@reduxjs/toolkit';

import { type SwapiVehicle } from '../../types/vehicles';

export const sliceName = 'vehicles';

const initialState: SwapiVehicle[] = [];

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {}
});

export default slice.reducer;
