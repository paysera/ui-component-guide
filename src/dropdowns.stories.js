import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

export default { title: 'Dropdowns' };

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

const renderDropdownButton = (title, i) => (
    <DropdownButton
        bsStyle={title.toLowerCase()}
        title={title}
        key={i}
        id={`dropdown-basic-${i}`}
    >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>
                    Active Item
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
);

export const DropDowns = () => (
    <div>
        <h2>Toggleable, contextual menu for displaying lists of links</h2>
        <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
        <p>See possible variations <a href="https://getbootstrap.com/docs/3.3/components/#dropdowns" target="_blank">here</a>.</p>
    </div>
);
