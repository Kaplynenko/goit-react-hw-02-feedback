// import Statistics from 'components/Statistics/statistics';

const Feedback = ({ options, onHandleIncrement }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button key={option} onClick={() => onHandleIncrement(option)}>
            {option}
          </button>
        );
      })}
    </>
  );
};

export default Feedback;
