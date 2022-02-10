import React from 'react';
import PropTypes from 'prop-types';
import { WrapperBtn, Button } from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperBtn>
      {options.map(option => (
        <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </WrapperBtn>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};