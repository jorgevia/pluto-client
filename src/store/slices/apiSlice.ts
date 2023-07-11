import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SwapiEntities } from '../../configs/routes';

export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  keepUnusedDataFor: 60 * 60 * 24000,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/'
  }),
  endpoints: (builder) => ({
    getEntity: builder.query({
      query: ({ entity, page }: { entity: SwapiEntities; page: number }) =>
        `${entity}/?page=${page}`
    }),
    getEntityById: builder.query({
      query: ({ entity, id }: { entity: SwapiEntities; id: string }) => `${entity}/${id}`
    })
  })
});

export const { useGetEntityQuery, useGetEntityByIdQuery } = swapiApi;
