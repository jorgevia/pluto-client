import './ListRow.scss';

type ListRowProps = {
  data: { title: string; description?: string }[];
  className?: string;
};

const ListRow = ({ data, className = '' }: ListRowProps) => {
  return (
    <div className={`list-row ${className}`}>
      {data.map(({ title, description }, index) => (
        <div key={index} className="list-row__wrapper">
          <div className="list-row__wrapper__title">{title}</div>
          {description && <div className="list-row__wrapper__description">{description}</div>}
        </div>
      ))}
    </div>
  );
};

export default ListRow;
