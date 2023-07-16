import './List.scss';

type ListProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const List = ({ className = '', children, onClick }: ListProps) => {
  return (
    <div className={`list ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
