import TableDetail from '../../../components/ui/TableDetail/TableDetail';
import { SwapiItems, SwapiPlanet } from '../../../types/entities';

type DetailProps = {
  data: SwapiItems;
};

const PlanetDetail = ({ data }: DetailProps) => {
  const planet = data as SwapiPlanet;
  const tableData = [
    { key: 'Terrain', value: planet.terrain },
    { key: 'Climate', value: planet.climate },
    { key: 'Population', value: planet.population },
    { key: 'Diameter', value: planet.diameter },
    { key: 'Gravity', value: planet.gravity },
    { key: 'Orbital Period', value: planet.orbital_period },
    { key: 'Rotation Period', value: planet.rotation_period },
    { key: 'Surface Water', value: planet.surface_water }
  ];
  return <TableDetail data={tableData} title={planet.name} />;
};

export default PlanetDetail;
