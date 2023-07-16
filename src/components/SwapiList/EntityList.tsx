import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import './EntityList.scss';

import { entityToName } from '../../configs/entities';
import { entityListComponent } from '../../configs/entitiesComponents';
import { getSwapiRoute, SwapiEntities } from '../../configs/routes';
import { useQuery } from '../../hooks/useQueryParams';
import { useGetEntityQuery } from '../../store/slices/apiSlice';
import { List } from '../List/List';
import SwapiContainer from '../SwapiContainer/SwapiContainer';
import { ContentWrapper, EntityHeader } from '../ui/EntityHeader';
import Paginator from '../ui/Paginator/Paginator';
import Search from '../ui/Search/Search';
import Spinner from '../ui/Spinner/Spinner';

type EntityListProps = {
  className?: string;
  entity: SwapiEntities;
};

const EntityList = ({ className = '', entity }: EntityListProps) => {
  const entityRef = React.useRef(entity);
  const query = useQuery();
  const q = query.get('q') || undefined;
  const page = Number(query.get('page')) || 1;
  const navigate = useNavigate();
  const { data, status } = useGetEntityQuery({ entity, page, query: q });
  const SwapiList = entityListComponent[entity];

  const handleClick = (url: string) => {
    navigate(getSwapiRoute(url));
  };

  React.useEffect(() => () => {
    entityRef.current = entity;
  });

  // Handled by ErrorBoundary
  if (status === QueryStatus.rejected) throw new Error('Error fetching list data');

  const header = (
    <EntityHeader className="entity-list__header">
      <ContentWrapper rightContent={<Search />}>
        <h1 className="entity-list__header__title">{`${entityToName[
          entity
        ].toUpperCase()} LIST`}</h1>
      </ContentWrapper>
    </EntityHeader>
  );

  const getDataList = () => {
    if (!data) return null;
    if (status === QueryStatus.pending && entityRef.current !== entity) return null;

    if (!data.results.length) {
      return <div className="entity-list__empty">NO RESULT FOUND</div>;
    }

    return (
      <>
        {data.results.map((item) => (
          <List key={item.url} onClick={() => handleClick(item.url)}>
            <SwapiList data={item} />
          </List>
        ))}
        <Paginator className="entity-list__container__paginator" count={data.count} total={10} />
      </>
    );
  };

  return (
    <div className={`entity-list ${className}`}>
      {header}
      {status === QueryStatus.pending && <Spinner />}
      <SwapiContainer className="entity-list__container" entity={entity}>
        <div className="entity-list__container__list-wrapper">{getDataList()}</div>
      </SwapiContainer>
    </div>
  );
};

export default EntityList;
