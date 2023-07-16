import { SwapiItems, SwapiPlanet } from '../../../types/entities';
import ListRow from '../../ui/ListRow/ListRow';

type PlanetsListProps = {
  data: SwapiItems;
};

const FilmsList = ({ data }: PlanetsListProps) => {
  const planet = data as SwapiPlanet;
  return <ListRow data={[{ title: planet.name, description: `Terrain: ${planet.terrain}` }]} />;
};

export default FilmsList;
