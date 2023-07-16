import TableDetail from '../../../components/ui/TableDetail/TableDetail';
import { SwapiItems, SwapiStarship } from '../../../types/entities';

type DetailProps = {
  data: SwapiItems;
};

const StarshipDetail = ({ data }: DetailProps) => {
  const starship = data as SwapiStarship;
  const tableData = [
    { key: 'Starship Class', value: starship.starship_class },
    { key: 'Model', value: starship.model },
    { key: 'Manufacturer', value: starship.manufacturer },
    { key: 'MGLT', value: starship.MGLT },
    { key: 'Cargo Capacity', value: starship.cargo_capacity },
    { key: 'Consumables', value: starship.consumables },
    { key: 'Cost in Credits', value: starship.cost_in_credits },
    { key: 'Crew', value: starship.crew },
    { key: 'Hyperdrive Rating', value: starship.hyperdrive_rating },
    { key: 'Length', value: starship.length },
    { key: 'Max Atmosphering Speed', value: starship.max_atmosphering_speed }
  ];
  return <TableDetail data={tableData} title={starship.name} />;
};

export default StarshipDetail;
