import './Paginator.scss';

type PaginatorProps = {
  total: number;
  count: number;
  page: number;
  onClick: (page: number) => void;
  className?: string;
};

const Paginator = ({ total, count, page, onClick, className = '' }: PaginatorProps) => {
  const pageCount = Math.ceil(count / total);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className={`paginator ${className}`}>
      <button className="paginator__button" onClick={() => onClick(page - 1)} disabled={page === 1}>
        Prev
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          className={`paginator__button ${page === pageNumber ? 'paginator__button--active' : ''}`}
          key={pageNumber}
          onClick={() => onClick(pageNumber)}>
          {pageNumber}
        </button>
      ))}
      <button
        className="paginator__button"
        onClick={() => onClick(page + 1)}
        disabled={page === pageCount}>
        Next
      </button>
    </div>
  );
};

export default Paginator;
