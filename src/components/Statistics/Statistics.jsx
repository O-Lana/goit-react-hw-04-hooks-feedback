import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        <List>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: {positiveFeedback} %</Item>
        </List>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};