import * as React from 'react';

import { storageKey } from '../configs/popularItems';
import { SwapiEntities } from '../configs/routes';
import useLocalStorageState from '../hooks/useLocalStorage';

type PopularItemsProviderProps = {
  className?: string;
  children: React.ReactNode;
};

type PopularItem = {
  url: string;
  title: string;
  entity: SwapiEntities;
  totalViews: number;
};

type PopularItems = {
  [key: string]: PopularItem;
};

type PopularItemsContext = {
  popularItems: PopularItems;
  dispatch: React.Dispatch<React.SetStateAction<PopularItems>>;
};

const PropularItemsContext = React.createContext<PopularItemsContext | null>(null);

export const PopularItemsProvider = ({ children }: PopularItemsProviderProps) => {
  const { value: popularItems, setValue: dispatch } = useLocalStorageState<PopularItems>(
    storageKey,
    {}
  );

  const value = React.useMemo(() => ({ popularItems, dispatch }), [popularItems]);

  return <PropularItemsContext.Provider value={value}>{children}</PropularItemsContext.Provider>;
};

export const usePopularItems = () => {
  const context = React.useContext(PropularItemsContext);

  if (!context) {
    throw new Error('usePopularItems must be used within a PopularItemsProvider');
  }

  return context;
};

export const setPopularitem = (
  dispatch: React.Dispatch<React.SetStateAction<PopularItems>>,
  item: Omit<PopularItem, 'totalViews'>
) => {
  dispatch((prev) => {
    if (prev[item.url]) {
      const prevItem = prev[item.url];
      return {
        ...prev,
        [item.url]: { ...prevItem, totalViews: prevItem.totalViews + 1 }
      };
    }

    return {
      ...prev,
      [item.url]: { ...item, totalViews: 1 }
    };
  });
};

export const sortPopularItems = (popularItems: PopularItems) => {
  return Object.values(popularItems).sort((a, b) => b.totalViews - a.totalViews);
};
