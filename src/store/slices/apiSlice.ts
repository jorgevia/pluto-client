import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { swapiBaseurl } from '../../configs/endpoints';
import { SwapiEntities } from '../../configs/routes';
import type { SwapiItems, SwapiResponse } from '../../types/entities';

export const swapiSlice = createApi({
  reducerPath: 'swapiApi',
  keepUnusedDataFor: 1000 * 60 * 60 * 24, // 1 day
  baseQuery: fetchBaseQuery({
    baseUrl: `${swapiBaseurl}/`
  }),
  endpoints: (builder) => ({
    getEntity: builder.query<SwapiResponse<SwapiItems[]>, { entity: SwapiEntities; page: number }>({
      query: ({ entity, page }) => `${entity}/?page=${page}`
    }),
    getEntityById: builder.query<SwapiItems, { entity: SwapiEntities; id?: string }>({
      query: ({ entity, id }: { entity: SwapiEntities; id: string }) => `${entity}/${id}`
    }),
    getEntitiesByUrl: builder.query<SwapiItems[], string[]>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchBaseQuery) {
        const urls = _arg;
        const response = await Promise.all(
          urls.map((url) => {
            return fetchBaseQuery(url);
          })
        );
        return { data: response.map((res) => res.data as SwapiItems) };
      },
      keepUnusedDataFor: 1000 * 60 * 15 // 15 minutes
    })
  })
});

export const { useGetEntityQuery, useGetEntitiesByUrlQuery, useGetEntityByIdQuery, usePrefetch } =
  swapiSlice;
