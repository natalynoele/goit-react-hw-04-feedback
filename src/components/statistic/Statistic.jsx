import StatisticWrap from './StatisticStyle';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticWrap>
      <p>Good:
        <span>{good}</span>
      </p>
      <p>Neutral:
        <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positivePercentage}</span>
      </p>
    </StatisticWrap>
  );
};

export default Statistic;
