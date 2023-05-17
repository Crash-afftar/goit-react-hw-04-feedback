import React from 'react';
import './Feedback.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className="Section_class">{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;