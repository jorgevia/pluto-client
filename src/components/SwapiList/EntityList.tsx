import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import './EntityList.scss';

import { entityListComponent } from '../../configs/entitiesComponents';
import { getSwapiRoute, SwapiEntities } from '../../configs/routes';
import { useGetEntityQuery } from '../../store/slices/apiSlice';
import { List } from '../List/List';
import SwapiContainer from '../SwapiContainer/SwapiContainer';
import Paginator from '../ui/Paginator/Paginator';
import Spinner from '../ui/Spinner/Spinner';

type EntityListProps = {
  className?: string;
  entity: SwapiEntities;
};

const EntityList = ({ className = '', entity }: EntityListProps) => {
  const previousEntity = React.useRef(entity);
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const { data, status } = useGetEntityQuery({ entity, page });
  const SwapiList = entityListComponent[entity];

  const handleClick = (url: string) => {
    navigate(getSwapiRoute(url));
  };

  React.useEffect(() => {
    if (previousEntity.current !== entity) {
      setPage(1);
      previousEntity.current = entity;
    }
  }, [entity]);

  if (status === QueryStatus.rejected) return <div>Error getting data</div>;

  return (
    <div className={`entity-list ${className}`}>
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
