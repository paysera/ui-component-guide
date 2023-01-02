import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TwoLineCell = ({
    top,
    bottom,
}) => (
    <Fragment>
        <div>
            <strong>{top}</strong>
        </div>
        <div>
            <span className='help-block hidden-xs'>{bottom}</span>
        </div>
    </Fragment>
);

TwoLineCell.propTypes = {
    top: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
};

export default TwoLineCell;
