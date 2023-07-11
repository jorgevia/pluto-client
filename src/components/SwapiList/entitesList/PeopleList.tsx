import './PeopleList.scss';

import { SwapiPerson, SwapiResponse } from '../../../types/entities';
import { List } from '../../List/List';

type PeopleListProps = {
  data: SwapiResponse<unknown>;
  onClick: (url: string) => void;
};

const PeopleList = ({ data, onClick }: PeopleListProps) => {
  const people = data.results as SwapiPerson[];
  return (
    <>
      {people.map((person) => (
        <List key={person.url} onClick={() => onClick(person.url)}>
          <div className="people-list__name">{person.name}</div>
        </List>
      ))}
    </>
  );
};

export default PeopleList;
