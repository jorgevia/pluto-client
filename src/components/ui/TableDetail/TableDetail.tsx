import './TableDetail.scss';

type DetailTableProps = {
  data: { key: string; value: string }[];
  title: string;
  className?: string;
};

const DetailTable = ({ data, title, className = '' }: DetailTableProps) => {
  return (
    <div className={`detail-table ${className}`}>
      <header className="detail-table__header">
        <h1 className="detail-table__header__title">{title}</h1>
      </header>
      <div className="detail-table__table">
        {data.map((item) => (
          <div key={item.key} className="detail-table__table__row">
            <div className="detail-table__table__row__cell detail-table__table__row__cell--header">
              {item.key}:{' '}
            </div>
            <div className="detail-table__table__row__cell detail-table__table__row__cell--value">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailTable;
