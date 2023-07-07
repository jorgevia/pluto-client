import { Outlet } from 'react-router-dom';

import './Home.scss';

import { useGetPeopleQuery } from '../../store/slices/apiSlice';

type HomeProps = {
  className?: string;
};

export const Home = ({ className = '' }: HomeProps) => {
  const { data: people, isLoading } = useGetPeopleQuery(1);

  console.log(people);
  console.log(isLoading);

  return (
    <>
      <aside>
        <header>Logo</header>
        <nav>Navigation</nav>
      </aside>
      <div className={`home ${className}`}>
        <Outlet />
      </div>
    </>
  );
};
