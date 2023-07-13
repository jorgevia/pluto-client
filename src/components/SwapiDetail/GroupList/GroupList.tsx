import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import './GroupList.scss';

import { entityListComponent } from '../../../configs/entitiesComponents';
import { SwapiEntities } from '../../../configs/routes';
import { useGetEntitiesByUrlQuery } from '../../../store/slices/apiSlice';

type GroupListProps = {
  entity: SwapiEntities;
  urls: string[];
  onClick: (url: string) => void;
};

const GroupList = ({ entity, urls, onClick }: GroupListProps) => {
  const { data, status } = useGetEntitiesByUrlQuery(urls);
  if (status === QueryStatus.pending) return <div>Loading...</div>;
  const SwapiList = entityListComponent[entity];

  return (
    <div className="group-list">
      {data &&
        data.map((item) => {
          return (
            <div className="group-list__item" key={item.url} onClick={() => onClick(item.url)}>
              <SwapiList data={item} />
            </div>
          );
        })}
    </div>
  );
};

export default GroupList;
