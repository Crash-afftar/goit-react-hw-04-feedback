import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <p className="Statistic">Good: {good}</p>
            <p className="Statistic">Neutral: {neutral}</p>
            <p className="Statistic">Bad: {bad}</p>
            <p className="Statistic__total">Total: {total}</p>
            <p className="Statistic__total">Positive feedback: {positivePercentage}%</p>
        </>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;