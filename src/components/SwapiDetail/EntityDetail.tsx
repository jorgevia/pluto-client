/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import './EntityDetail.scss';

import Card from '../../components/ui/Card/Card';
import { type entityGroups, entityToName, translateToEntity } from '../../configs/entities';
import { entityDetailComponent } from '../../configs/entitiesComponents';
import { getSwapiRoute, SwapiEntities } from '../../configs/routes';
import { setPopularitem, usePopularItems } from '../../providers/PopularItemsProvider';
import { useGetEntityByIdQuery, usePrefetch } from '../../store/slices/apiSlice';
import { SwapiItems } from '../../types/entities';
import SwapiContainer from '../SwapiContainer/SwapiContainer';
import Spinner from '../ui/Spinner/Spinner';
import GroupList from './GroupList/GroupList';

type EntityDetailProps = {
  className?: string;
  entity: SwapiEntities;
};

const getEntityGroups = (entity?: SwapiItems) => {
  if (!entity) return [];

  return Object.keys(entity).reduce((acc, key) => {
    if (
      Array.isArray(entity[key as keyof SwapiItems]) &&
      entity[key as keyof SwapiItems].length > 0
    ) {
      acc.push(key as entityGroups);
    }
    return acc;
  }, [] as entityGroups[]);
};

const EntityDetail = ({ className = '', entity }: EntityDetailProps) => {
  const { dispatch } = usePopularItems();
  const navigate = useNavigate();
  const { id: entityId } = useParams<{ id?: string }>();
  const prefetch = usePrefetch('getEntitiesByUrl');
  const { data, status } = useGetEntityByIdQuery({ entity, id: entityId }, { skip: !entityId });
  const SwapiDetailComponent = entityDetailComponent[entity];
  const groups = getEntityGroups(data);

  const handleClick = (url: string) => {
    navigate(getSwapiRoute(url));
  };

  React.useEffect(() => {
    if (data) {
      setPopularitem(dispatch, {
        entity,
        url: data.url,
        title: (data as any).name || (data as any).title
      });
    }
  }, [data]);

  // Handled by ErrorBoundary
  if (status === QueryStatus.rejected) throw new Error('Error fetching datail data');

  return (
    <div className={`entity-detail ${className}`} data-testid="entity-detail">
      {status === QueryStatus.pending && <Spinner />}
      {data && status === QueryStatus.fulfilled && (
        <>
          <SwapiContainer entity={entity}>
            <SwapiDetailComponent data={data} />
            <div className="entity-detail__groups">
              {groups.map((group) => {
                const entityTranslated = translateToEntity[group];
                return (
                  <Card
                    onHover={() => prefetch((data as any)[group])}
                    key={group}
                    title={entityToName[group as SwapiEntities]}>
                    <div>
                      <GroupList
                        onClick={handleClick}
                        entity={entityTranslated}
                        urls={(data as any)[group]}
                      />
                    </div>
                  </Card>
                );
              })}
            </div>
          </SwapiContainer>
        </>
      )}
    </div>
  );
};

export default EntityDetail;
