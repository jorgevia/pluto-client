import TableDetail from '../../../components/ui/TableDetail/TableDetail';
import { SwapiFilm, SwapiItems } from '../../../types/entities';

type DetailProps = {
  data: SwapiItems;
};

const FilmDetail = ({ data }: DetailProps) => {
  const film = data as SwapiFilm;
  const tableData = [
    { key: 'Director', value: film.director },
    { key: 'Episode', value: film.episode_id?.toString() || 'n/a' },
    { key: 'Producer', value: film.producer },
    { key: 'Release Date', value: film.release_date },
    { key: 'Opening Crawl', value: film.opening_crawl }
  ];
  return <TableDetail data={tableData} title={film.title} />;
};

export default FilmDetail;
