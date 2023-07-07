import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  SwapiFilm,
  SwapiPerson,
  SwapiPlanet,
  SwapiResponse,
  SwapiSpecie,
  SwapiStarship,
  SwapiVehicle
} from '../../types/entities';

export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/'
  }),
  endpoints: (builder) => ({
    getPeople: builder.query<SwapiResponse<SwapiPerson[]>, void>({
      query: (page) => `people/?page=${page}`
    }),
    getPerson: builder.query<SwapiPerson, string>({
      query: (id) => `people/${id}`
    }),

    getPlanets: builder.query<SwapiResponse<SwapiPlanet[]>, void>({
      query: (page) => `planets/?page=${page}`
    }),
    getPlanet: builder.query<SwapiPlanet, string>({
      query: (id) => `planets/${id}`
    }),

    getSpecies: builder.query<SwapiResponse<SwapiSpecie[]>, void>({
      query: (page) => `species/?page=${page}`
    }),
    getSpecie: builder.query<SwapiSpecie, string>({
      query: (id) => `species/${id}`
    }),

    getFilms: builder.query<SwapiResponse<SwapiFilm[]>, void>({
      query: (page) => `films/?page=${page}`
    }),
    getFilm: builder.query<SwapiFilm, string>({
      query: (id) => `films/${id}`
    }),

    getStarships: builder.query<SwapiResponse<SwapiStarship[]>, void>({
      query: (page) => `starships/?page=${page}`
    }),
    getStarship: builder.query<SwapiStarship, string>({
      query: (id) => `starships/${id}`
    }),

    getVehicles: builder.query<SwapiResponse<SwapiVehicle[]>, void>({
      query: (page) => `vehicles/?page=${page}`
    }),
    getVehicle: builder.query<SwapiVehicle, string>({
      query: (id) => `vehicles/${id}`
    })
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
