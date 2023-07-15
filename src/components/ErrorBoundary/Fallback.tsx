import { useNavigate } from 'react-router-dom';

import './Fallback.scss';

const Fallback = ({
  error,
  resetErrorBoundary
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  const navigate = useNavigate();

  const handleReset = () => {
    resetErrorBoundary();
    navigate('/');
  };

  return (
    <div className="error-boundary">
      <h1 className="error-boundary__title">SOMETHING WENT WRONG.</h1>
      <p className="error-boundary__description">{error.message}</p>
      <button className="error-boundary__reset" onClick={handleReset}>
        CLICK TO CONTINUE
      </button>
    </div>
  );
};

export default Fallback;
