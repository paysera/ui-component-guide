import React, { memo } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/js/dropdown';

const DottedDropdownMenu = ({ dropdownContent, customClass }) => (
    <div className="dropdown dotted-dropdown-menu">
        <span
            className="dropdown-toggle"
            id="dotted-menu"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            role="button"
        >
            <i
                className={`fa fa-lg fa-ellipsis-v ${customClass}`}
                onMouseDown={event => event.preventDefault()}
                tabIndex="0"
                role="button"
            />
        </span>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dotted-menu">
            {/* eslint-disable-next-line react/no-array-index-key */}
            {dropdownContent.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
    </div>
);

DottedDropdownMenu.defaultProps = {
    customClass: '',
};

DottedDropdownMenu.propTypes = {
    dropdownContent: PropTypes.arrayOf(PropTypes.element).isRequired,
    customClass: PropTypes.string,
};

export default memo(DottedDropdownMenu);
