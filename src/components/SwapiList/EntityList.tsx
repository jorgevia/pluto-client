import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import './EntityList.scss';

import { getSwapiRoute, SwapiEntities } from '../../configs/routes';
import { useGetEntityQuery } from '../../store/slices/apiSlice';
import { SwapiResponse } from '../../types/entities';
import Spinner from '../ui/Spinner/Spinner';
import {
  FilmsList,
  PeopleList,
  PlanetsList,
  SpeciesList,
  StarshipsList,
  VehiclesList
} from './entitesList';
import SwapiListContainer from './SwapiListContainer';

type EntityListProps = {
  className?: string;
  entity: SwapiEntities;
};

const entityListComponent: {
  [key in SwapiEntities]: React.FC<{
    data: SwapiResponse<unknown[]>;
    onClick: (url: string) => void;
  }>;
} = {
  films: FilmsList,
  people: PeopleList,
  planets: PlanetsList,
  species: SpeciesList,
  starships: StarshipsList,
  vehicles: VehiclesList
};

const EntityList = ({ className = '', entity }: EntityListProps) => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const { data, status } = useGetEntityQuery({ entity, page });
  const SwapiList = entityListComponent[entity];

  const handleClick = (url: string) => {
    navigate(getSwapiRoute(url));
  };

  if (status === QueryStatus.pending) return <Spinner />;
  if (status === QueryStatus.rejected) return <div>Error getting data</div>;

  return (
    <SwapiListContainer entity={entity}>
      <div className="entity-list__container">
        <SwapiList data={data as SwapiResponse<unknown[]>} onClick={handleClick} />
      </div>
    </SwapiListContainer>
  );
};

export default EntityList;
