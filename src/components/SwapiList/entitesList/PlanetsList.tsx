import { SwapiPlanet, SwapiResponse } from '../../../types/entities';
import { List } from '../../List/List';

type PlanetsListProps = {
  data: SwapiResponse<unknown>;
  onClick: (url: string) => void;
};

const PlanetsList = ({ data, onClick }: PlanetsListProps) => {
  const planets = data.results as SwapiPlanet[];
  return (
    <>
      {planets.map((planet) => (
        <List key={planet.url} onClick={() => onClick(planet.url)}>
          <div>{planet.name}</div>
        </List>
      ))}
    </>
  );
};

export default PlanetsList;
