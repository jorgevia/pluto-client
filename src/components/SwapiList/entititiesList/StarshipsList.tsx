import { SwapiItems, SwapiStarship } from '../../../types/entities';
import ListRow from '../../ui/ListRow/ListRow';

type StarshipsListProps = {
  data: SwapiItems;
};

const StarshipsList = ({ data }: StarshipsListProps) => {
  const starship = data as SwapiStarship;
  return <ListRow data={[{ title: starship.name, description: `Model: ${starship.model}` }]} />;
};

export default StarshipsList;
