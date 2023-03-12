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
        >
          {capitalizeFirstLetter(option)}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
