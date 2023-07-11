import { getSwapiRoute } from '../../../configs/routes';
import { SwapiFilm, SwapiResponse } from '../../../types/entities';
import { List } from '../../List/List';

type FilmsListProps = {
  data: SwapiResponse<unknown>;
  onClick: (url: string) => void;
};

const FilmsList = ({ data, onClick }: FilmsListProps) => {
  const films = data.results as SwapiFilm[];
  return (
    <>
      {films.map((film) => (
        <List key={film.url} onClick={() => onClick(film.url)}>
          <div>{film.title}</div>
        </List>
      ))}
    </>
  );
};

export default FilmsList;
