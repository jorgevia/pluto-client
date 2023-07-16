import './Paginator.scss';

import { useQuery, useReplaceUrlQuery } from '../../../hooks/useQueryParams';

type PaginatorProps = {
  total: number;
  count: number;
  className?: string;
};

const Paginator = ({ total, count, className = '' }: PaginatorProps) => {
  const query = useQuery();
  const replaceUrlQuery = useReplaceUrlQuery();
  const page = Number(query.get('page')) || 1;
  const pageCount = Math.ceil(count / total);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  const onClick = (page: number) => {
    replaceUrlQuery('page', String(page));
  };

  return (
    <>
      <div className={`paginator ${className}`}>
        <button
          className="paginator__button"
          onClick={() => onClick(page - 1)}
          disabled={page === 1}>
          Prev
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            className={`paginator__button ${
              page === pageNumber ? 'paginator__button--active' : ''
            }`}
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
    </>
  );
};

export default Paginator;
