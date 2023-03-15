import PropTypes from 'prop-types';
import Button from './ButtonStyle';
import { capitalizeFirstLetter } from '../helper';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          data-key={option}
          onClick={onLeaveFeedback}
          o
        >
          {capitalizeFirstLetter(option)}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
