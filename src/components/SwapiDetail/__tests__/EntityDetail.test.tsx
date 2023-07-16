import { render, screen } from "@testing-library/react";
import { QueryStatus } from '@reduxjs/toolkit/dist/query';
import user from "@testing-library/user-event"; 

import EntityDetail from "../EntityDetail";

import { BrowserRouter } from "react-router-dom";
import { usePrefetch } from '../../../store/slices/apiSlice';

const vehicleMock = {
    "name": "Sand Crawler",
    "model": "Digger Crawler",
    "manufacturer": "Corellia Mining Corporation",
    "cost_in_credits": "150000",
    "length": "36.8 ",
    "max_atmosphering_speed": "30",
    "crew": "46",
    "passengers": "30",
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "vehicle_class": "wheeled",
    "pilots": [],
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/"
    ],
    "created": "2014-12-10T15:36:25.724000Z",
    "edited": "2014-12-20T21:30:21.661000Z",
    "url": "https://swapi.dev/api/vehicles/4/"
}

jest.mock('react-router-dom', () => {
  const navigateFn = jest.fn();
  return {
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: "/people" }),
    useNavigate: () => navigateFn,
    useParams: () => ({ id: 4 }),
  };
})

jest.mock('../../../providers/PopularItemsProvider', () => {
  const dispatchFn = jest.fn();
  return {
    usePopularItems: () => {
      return {
        dispatch: dispatchFn,
      }
    },
    setPopularitem: jest.fn()
  }
});

jest.mock("../../../store/slices/apiSlice", () => {
  const prefetchFn = jest.fn(() => Promise.resolve());
  return {
    usePrefetch: jest.fn(() => prefetchFn),
    useGetEntityByIdQuery: jest.fn(() => ({ data: vehicleMock, status: QueryStatus.fulfilled })),
  }
})

afterEach(() => {
  jest.clearAllMocks();
})

describe("EntityDetail", () => {
  it("should render the entity detail", async () => {
    const prefetch = usePrefetch("getEntity")
    const {debug} = render(<BrowserRouter><EntityDetail entity="vehicles" /></BrowserRouter>);
    
    expect(screen.getByTestId("entity-detail")).toBeInTheDocument();  
    
    expect(prefetch).toHaveBeenCalledTimes(0)
    debug()
  })
});






