import { SwapiItems, SwapiPerson } from '../../../types/entities';
import ListRow from '../../ui/ListRow/ListRow';

type FilmsListProps = {
  data: SwapiItems;
};

const FilmsList = ({ data }: FilmsListProps) => {
  const person = data as SwapiPerson;
  return <ListRow data={[{ title: person.name, description: `Gender: ${person.gender}` }]} />;
};

export default FilmsList;
