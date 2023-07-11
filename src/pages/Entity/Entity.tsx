import { useParams } from 'react-router-dom';

import './Entity.scss';

import EntityList from '../../components/SwapiList/EntityList';
import { SwapiEntities } from '../../configs/routes';

type EntityProps = {
  entity: SwapiEntities;
  className?: string;
};

export const Entity = ({ entity, className = '' }: EntityProps) => {
  const params = useParams<{ id?: string }>();
  if (!params.id) return <EntityList entity={entity} />;
  return <div>I have id!! so we are going to render the entity page</div>;
};
