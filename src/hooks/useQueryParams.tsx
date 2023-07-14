import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const useReplaceUrlQuery = () => {
  const navigate = useNavigate();
  const query = useQuery();

  return React.useCallback(
    (key: string, value: string) => {
      query.set(key, value);
      navigate(`?${query.toString()}`, { replace: true });
    },
    [navigate, query]
  );
};
