import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"; 
import Sidebar from "../Sidebar";
import { BrowserRouter } from "react-router-dom";
import { usePrefetch } from '../../../store/slices/apiSlice';

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: "/people" }),
  };
});

jest.mock("../../../store/slices/apiSlice", () => {
  const prefetchFn = jest.fn(() => Promise.resolve());
  return {
    usePrefetch: jest.fn(() => prefetchFn),
  }
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Sidebar", () => {
  it("should render the sidebar and show only one active link", async () => {
    const prefetch = usePrefetch("getEntity")
    render(<BrowserRouter><Sidebar /></BrowserRouter>);
    
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    
    expect(screen.getByText(/people/i)).toBeInTheDocument();
    expect(screen.getByText(/planets/i)).toBeInTheDocument();
    expect(screen.getByText(/films/i)).toBeInTheDocument();
    expect(screen.getByText(/species/i)).toBeInTheDocument();
    expect(screen.getByText(/vehicles/i)).toBeInTheDocument();
    expect(screen.getByText(/starships/i)).toBeInTheDocument();

    expect(screen.getByText(/people/i)).toHaveClass("sidebar__nav__wrapper__item__link--active");
    expect(screen.getByText(/planets/i)).not.toHaveClass("sidebar__nav__wrapper__item__link--active");
    expect(screen.getByText(/films/i)).not.toHaveClass("sidebar__nav__wrapper__item__link--active");
    expect(screen.getByText(/species/i)).not.toHaveClass("sidebar__nav__wrapper__item__link--active");
    expect(screen.getByText(/vehicles/i)).not.toHaveClass("sidebar__nav__wrapper__item__link--active");
    expect(screen.getByText(/starships/i)).not.toHaveClass("sidebar__nav__wrapper__item__link--active");

    expect(prefetch).toHaveBeenCalledTimes(0);
  })

  it("should prefetch data when hovering over a link", async () => {
    const prefetch = usePrefetch("getEntity")
    render(<BrowserRouter><Sidebar /></BrowserRouter>);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    await user.hover(screen.getByText(/planets/i));
    
    expect(prefetch).toHaveBeenCalledTimes(1);
    expect(prefetch).toHaveBeenCalledWith({ entity: "planets", page: 1 });
  })

  it("should update the url when clicking on a link", async () => {
    const prefetch = usePrefetch("getEntity")
    render(<BrowserRouter><Sidebar /></BrowserRouter>);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    await user.click(screen.getByText(/vehicles/i));

    expect(prefetch).toHaveBeenCalledTimes(1);
    expect(prefetch).toHaveBeenCalledWith({ entity: "vehicles", page: 1 });

    expect(window.location.pathname).toBe("/vehicles");
  });
})



