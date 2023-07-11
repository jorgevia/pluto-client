import { SwapiResponse, SwapiVehicle } from '../../../types/entities';
import { List } from '../../List/List';

type VehiclesListProps = {
  data: SwapiResponse<unknown>;
  onClick: (url: string) => void;
};

const VehiclesList = ({ data, onClick }: VehiclesListProps) => {
  const vehicles = data.results as SwapiVehicle[];
  return (
    <>
      {vehicles.map((vehicle) => (
        <List key={vehicle.url} onClick={() => onClick(vehicle.url)}>
          <div>{vehicle.name}</div>
        </List>
      ))}
    </>
  );
};

export default VehiclesList;
