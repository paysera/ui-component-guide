import React from "react";
import PropTypes from 'prop-types';

const ExpanderButton = ({ isExpanded }) => (
    <i
        className={`fa fa-lg fa-angle-${isExpanded ? 'down' : 'right'} arrow expander-trigger`}
        tabIndex="0"
        role="button"
        onMouseDown={event => event.preventDefault()}
    />
);

ExpanderButton.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
};

export default ExpanderButton;
