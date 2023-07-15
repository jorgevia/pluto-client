import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import './Entity.scss';

import Fallback from '../../components/ErrorBoundary/Fallback';
import EntityDetail from '../../components/SwapiDetail/EntityDetail';
import EntityList from '../../components/SwapiList/EntityList';
import { SwapiEntities } from '../../configs/routes';

type EntityProps = {
  entity: SwapiEntities;
};

export const Entity = ({ entity }: EntityProps) => {
  const params = useParams<{ id?: string }>();

  return (
    <div className="entity-container">
      <ErrorBoundary FallbackComponent={Fallback}>
        {!params.id ? <EntityList entity={entity} /> : <EntityDetail entity={entity} />}
      </ErrorBoundary>
    </div>
  );
};
