import { BrowserRouter } from 'react-router-dom';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';
import { act, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import { setPopularitem, usePopularItems } from '../../../providers/PopularItemsProvider';
import { useGetEntityByIdQuery, usePrefetch } from '../../../store/slices/apiSlice';
import EntityDetail from '../EntityDetail';

const vehicleMock = {
  name: 'Sand Crawler',
  model: 'Digger Crawler',
  manufacturer: 'Corellia Mining Corporation',
  cost_in_credits: '150000',
  length: '36.8 ',
  max_atmosphering_speed: '30',
  crew: '46',
  passengers: '30',
  cargo_capacity: '50000',
  consumables: '2 months',
  vehicle_class: 'wheeled',
  pilots: [],
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/5/'],
  created: '2014-12-10T15:36:25.724000Z',
  edited: '2014-12-20T21:30:21.661000Z',
  url: 'https://swapi.dev/api/vehicles/4/'
};

jest.mock('react-router-dom', () => {
  const navigateFn = jest.fn();
  return {
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: '/people' }),
    useNavigate: () => navigateFn,
    useParams: () => ({ id: 4 })
  };
});

jest.mock('../../../providers/PopularItemsProvider', () => {
  const dispatchFn = jest.fn();
  const setPopularItemsFn = jest.fn();
  return {
    usePopularItems: () => {
      return {
        dispatch: dispatchFn
      };
    },
    setPopularitem: setPopularItemsFn
  };
});

jest.mock('../../../store/slices/apiSlice', () => {
  const prefetchFn = jest.fn(() => Promise.resolve());
  return {
    usePrefetch: jest.fn(() => prefetchFn),
    useGetEntityByIdQuery: jest.fn(() => ({ data: vehicleMock, status: QueryStatus.fulfilled }))
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('EntityDetail', () => {
  it('should render the entity detail', async () => {
    const prefetch = usePrefetch('getEntity');
    render(
      <BrowserRouter>
        <EntityDetail entity="vehicles" />
      </BrowserRouter>
    );

    expect(screen.getByTestId('entity-detail')).toBeInTheDocument();

    expect(prefetch).toHaveBeenCalledTimes(0);
  });

  it('should call prefetch when hover over a group', async () => {
    const prefetch = usePrefetch('getEntity');
    render(
      <BrowserRouter>
        <EntityDetail entity="vehicles" />
      </BrowserRouter>
    );

    expect(screen.getByTestId('entity-detail')).toBeInTheDocument();

    await user.hover(screen.getByText('Films'));
    expect(prefetch).toHaveBeenCalledTimes(1);
    expect(prefetch).toHaveBeenCalledWith([
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/5/'
    ]);
  });

  it('should update populat items', async () => {
    const { dispatch } = usePopularItems();
    render(
      <BrowserRouter>
        <EntityDetail entity="vehicles" />
      </BrowserRouter>
    );

    expect(screen.getByTestId('entity-detail')).toBeInTheDocument();

    expect(setPopularitem).toHaveBeenCalledTimes(1);
    expect(setPopularitem).toHaveBeenCalledWith(dispatch, {
      entity: 'vehicles',
      title: 'Sand Crawler',
      url: 'https://swapi.dev/api/vehicles/4/'
    });
  });

  it('should render the entity detail with a loading state', async () => {
    (useGetEntityByIdQuery as jest.Mock).mockReturnValueOnce({
      data: undefined,
      status: QueryStatus.pending
    });
    render(
      <BrowserRouter>
        <EntityDetail entity="vehicles" />
      </BrowserRouter>
    );

    expect(screen.getByTestId('entity-detail')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
