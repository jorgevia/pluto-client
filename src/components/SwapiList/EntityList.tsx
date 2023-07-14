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
  const query = useQuery();
  const q = query.get('q') || undefined;
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const { data, status } = useGetEntityQuery({ entity, page, query: q });
  const SwapiList = entityListComponent[entity];

  const handleClick = (url: string) => {
    navigate(getSwapiRoute(url));
  };

  if (status === QueryStatus.rejected) return <div>Error getting data</div>;

  return (
    <div className={`entity-list ${className}`}>
      <EntityHeader className="entity-list__header">
        <ContentWrapper rightContent={<Search />}>
          <h1 className="entity-list__header__title">{`${entityToName[
            entity
          ].toUpperCase()} LIST`}</h1>
        </ContentWrapper>
      </EntityHeader>
      {status === QueryStatus.pending && <Spinner />}
      <SwapiContainer className="entity-list__container" entity={entity}>
        {data && (
          <>
            <div className="entity-list__container__list-wrapper">
              {data.results.map((item) => (
                <List key={item.url} onClick={() => handleClick(item.url)}>
                  <SwapiList data={item} />
                </List>
              ))}
            </div>
            <Paginator
              className="entity-list__container__paginator"
              count={data.count}
              total={10}
              page={page}
              onClick={setPage}
            />
          </>
        )}
      </SwapiContainer>
    </div>
  );
};

export default EntityList;
