import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { type SwapiPerson } from '../../types/people';

export const sliceName = 'people';

const initialState: { [key: string]: SwapiPerson } = {};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    receivedPeople(state, action: PayloadAction<SwapiPerson[]>) {
      const people = action.payload;
      state = people.reduce((acc, person) => {
        return {
          ...acc,
          [person.url]: person
        };
      }, {});
    }
  }
});

export const { receivedPeople } = slice.actions;
export default slice.reducer;
