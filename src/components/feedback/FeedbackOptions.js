import PropTypes from 'prop-types';
import Button from './ButtonStyle';
import capitalizeFirstLetter from 'functions/capitalizeFirstLetter';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <Button
          key={option}
          type="button"
          data-key={option}
          onClick={onLeaveFeedback}
        >
          {capitalizeFirstLetter(option)}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
