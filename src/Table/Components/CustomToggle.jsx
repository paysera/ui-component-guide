import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const CustomToggle = forwardRef(({ onClick, onKeyDown }, ref) => (
    <i
        className="fa fa-lg fa-ellipsis-v"
        tabIndex="0"
        onKeyDown={onKeyDown}
        onClick={onClick}
        ref={ref}
        role="button"
    />
));

CustomToggle.propTypes = {
    onKeyDown: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default memo(CustomToggle);
