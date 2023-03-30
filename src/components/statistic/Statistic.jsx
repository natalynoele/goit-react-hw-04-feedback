import PropTypes from 'prop-types';
import StatisticWrap from './StatisticStyle';

const Statistic = ({ good, neutral, bad, positivePercentage, total }) => {
  return (
    <StatisticWrap>
      <p>
        Good:
        <span>{good}</span>
      </p>
      <p>
        Neutral:
        <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total()}</span>
      </p>
      <p>
        Positive feedback: <span>{positivePercentage()}</span>
      </p>
    </StatisticWrap>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistic;
