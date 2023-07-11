import { SwapiResponse, SwapiSpecie } from '../../../types/entities';
import { List } from '../../List/List';

type SpeciesListProps = {
  data: SwapiResponse<unknown>;
  onClick: (url: string) => void;
};

const SpeciesList = ({ data, onClick }: SpeciesListProps) => {
  const species = data.results as SwapiSpecie[];
  return (
    <>
      {species.map((specie) => (
        <List key={specie.url} onClick={() => onClick(specie.url)}>
          <div>{specie.name}</div>
        </List>
      ))}
    </>
  );
};

export default SpeciesList;
