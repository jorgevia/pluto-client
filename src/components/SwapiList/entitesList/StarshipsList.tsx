import { SwapiResponse, SwapiStarship } from '../../../types/entities';
import { List } from '../../List/List';

type StarshipsListProps = {
  data: SwapiResponse<unknown>;
  onClick: (url: string) => void;
};

const StarshipsList = ({ data, onClick }: StarshipsListProps) => {
  const starships = data.results as SwapiStarship[];
  return (
    <>
      {starships.map((starship) => (
        <List key={starship.url} onClick={() => onClick(starship.url)}>
          <div>
            <div>{starship.name}</div>
            <div>{starship.model}</div>
          </div>
        </List>
      ))}
    </>
  );
};

export default StarshipsList;
