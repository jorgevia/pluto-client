import { SwapiItems, SwapiPerson } from '../../../types/entities';
import TableDetail from '../../ui/TableDetail/TableDetail';

type DetailProps = {
  data: SwapiItems;
};

const PersonDetail = ({ data }: DetailProps) => {
  const person = data as SwapiPerson;
  const tableData = [
    { key: 'Height', value: person.height },
    { key: 'Birth year', value: person.birth_year },
    { key: 'Mass', value: person.mass },
    { key: 'Eye color', value: person.eye_color },
    { key: 'Hair Color', value: person.hair_color }
  ];
  return <TableDetail data={tableData} title={person.name} />;
};

export default PersonDetail;
