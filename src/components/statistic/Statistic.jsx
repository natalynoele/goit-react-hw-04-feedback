import StatisticWrap from "./StatisticStyle";
  
const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticWrap>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </StatisticWrap>
  );
};

export default Statistic;
