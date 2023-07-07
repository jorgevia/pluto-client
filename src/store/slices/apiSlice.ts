import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SwapiPerson } from '../../types/people';
import { SwapiResponse } from '../../types/response';

export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/'
  }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: (page) => `people/?page=${page}`,
      transformResponse: (response: SwapiResponse<SwapiPerson[]>) => {
        return {
          result: response.results.map((person: SwapiPerson) => {
            return {
              ...person,
              id: person.url
            };
          }),
          count: response.count,
          next: response
        };
      }
    }),
    // getPerson: builder.query({
    //   query: (id) => `people/${id}`
    // }),
    getPlanets: builder.query({
      query: (page) => `planets/?page=${page}`
    }),
    // getPlanet: builder.query({
    //   query: (id) => `planets/${id}`
    // }),
    getSpecies: builder.query({
      query: (page) => `species/?page=${page}`
    }),
    // getSpecie: builder.query({
    //   query: (id) => `species/${id}`
    // }),
    getFilms: builder.query({
      query: (page) => `films/?page=${page}`
    }),
    // getFilm: builder.query({
    //   query: (id) => `films/${id}`
    // }),
    getStarships: builder.query({
      query: (page) => `starships/?page=${page}`
    }),
    // getStarship: builder.query({
    //   query: (id) => `starships/${id}`
    // }),
    getVehicles: builder.query({
      query: (page) => `vehicles/?page=${page}`
    })
    // getVehicle: builder.query({
    //   query: (id) => `vehicles/${id}`
    // })
  })
});

export const {
  useGetPeopleQuery,
  useGetPlanetsQuery,
  useGetSpeciesQuery,
  useGetFilmsQuery,
  useGetStarshipsQuery,
  useGetVehiclesQuery
} = swapiApi;
