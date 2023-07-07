import { useGetPeopleQuery } from '../slices/apiSlice';

export const usePeople = () => {
  const { data, status } = useGetPeopleQuery();

  return {
    data: data?.results || [],
    previousPage: data?.previous,
    nextPage: data?.next,
    count: data?.count,
    total: 10,
    status
  };
};
