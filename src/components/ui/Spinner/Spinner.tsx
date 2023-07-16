import './Spinner.scss';

const Spinner = () => {
  return (
    <>
      <div className="spinner-mask" />
      <div className="spinner" data-testid="spinner" />
    </>
  );
};

export default Spinner;
