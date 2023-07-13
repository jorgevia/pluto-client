import TableDetail from '../../../components/ui/TableDetail/TableDetail';
import { SwapiItems, SwapiVehicle } from '../../../types/entities';

type DetailProps = {
  data: SwapiItems;
};

const VehicleDetail = ({ data }: DetailProps) => {
  const vehicle = data as SwapiVehicle;
  const tableData = [
    { key: 'Model', value: vehicle.model },
    { key: 'Manufacturer', value: vehicle.manufacturer },
    { key: 'Cost in Credits', value: vehicle.cost_in_credits },
    { key: 'Length', value: vehicle.length },
    { key: 'Crew', value: vehicle.crew },
    { key: 'Passengers', value: vehicle.passengers },
    { key: 'Cargo Capacity', value: vehicle.cargo_capacity },
    { key: 'Consumables', value: vehicle.consumables },
    { key: 'Vehicle Class', value: vehicle.vehicle_class }
  ];
  return <TableDetail data={tableData} title={vehicle.name} />;
};

export default VehicleDetail;
