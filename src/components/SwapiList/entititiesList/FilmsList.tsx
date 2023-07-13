import { SwapiFilm, SwapiItems } from '../../../types/entities';
import ListRow from '../../ui/ListRow/ListRow';

type FilmsListProps = {
  data: SwapiItems;
};

const FilmsList = ({ data }: FilmsListProps) => {
  const film = data as SwapiFilm;
  return <ListRow data={[{ title: film.title, description: `Director: ${film.director}` }]} />;
};

export default FilmsList;
