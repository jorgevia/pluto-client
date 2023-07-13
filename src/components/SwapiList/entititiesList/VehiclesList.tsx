import { SwapiItems, SwapiVehicle } from '../../../types/entities';
import ListRow from '../../ui/ListRow/ListRow';

type VehiclesListProps = {
  data: SwapiItems;
};

const VehiclesList = ({ data }: VehiclesListProps) => {
  const vehicle = data as SwapiVehicle;
  return <ListRow data={[{ title: vehicle.name, description: `Model: ${vehicle.model}` }]} />;
};

export default VehiclesList;
