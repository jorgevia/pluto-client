import TableDetail from '../../../components/ui/TableDetail/TableDetail';
import { SwapiItems, SwapiSpecie } from '../../../types/entities';

type DetailProps = {
  data: SwapiItems;
};

const SpecieDetail = ({ data }: DetailProps) => {
  const specie = data as SwapiSpecie;
  const tableData = [
    { key: 'Average Heiht', value: specie.average_height },
    { key: 'Average Lifespan', value: specie.average_lifespan },
    { key: 'Classification', value: specie.classification },
    { key: 'Designation', value: specie.designation },
    { key: 'Eye Colors', value: specie.eye_colors },
    { key: 'Hair Colors', value: specie.hair_colors },
    { key: 'Language', value: specie.language }
  ];
  return <TableDetail data={tableData} title={specie.name} />;
};

export default SpecieDetail;
