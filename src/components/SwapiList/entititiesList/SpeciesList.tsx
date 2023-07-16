import { SwapiItems, SwapiSpecie } from '../../../types/entities';
import ListRow from '../../ui/ListRow/ListRow';

type SpeciesListProps = {
  data: SwapiItems;
};

const SpeciesList = ({ data }: SpeciesListProps) => {
  const specie = data as SwapiSpecie;

  return (
    <ListRow
      data={[{ title: specie.name, description: `Classification: ${specie.classification}` }]}
    />
  );
};

export default SpeciesList;
