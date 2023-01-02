import React from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';

import TwoLineCell from '../Components/TwoLineCell';
import ExpanderButton from '../Components/ExpanderButton';
import CustomToggle from '../Components/CustomToggle';

export default [
    {
        id: 'date',
        Header: 'Date',
        headerClassName: 'text-left',
        className: 'text-left',
        width: 160,
        accessor: ({ date }) => {
            const [d, t] = date.split('T');
            return <TwoLineCell top={d} bottom={t} />;
        },
    },
    {
        id: 'transferNo',
        Header: 'Transfer.No',
        headerClassName: 'text-left',
        className: 'text-left',
        width: 150,
        accessor: 'transferNo',
    },
    {
        id: 'recipient-purpose',
        Header: 'Recipient / Purpose',
        headerClassName: 'text-left',
        className: 'menu-button text-left',
        minWidth: 260,
        accessor: ({ recipient, purpose }) => <TwoLineCell top={recipient} bottom={purpose} />,
    },
    {
        id: 'amount',
        Header: 'Amount',
        headerClassName: 'text-left',
        className: 'text-left',
        width: 140,
        accessor: 'amount',
    },
    {
        id: 'expander',
        expander: true,
        Header: () => <strong>Actions</strong>,
        // eslint-disable-next-line react/prop-types
        Expander: ({ isExpanded }) => <ExpanderButton isExpanded={!!isExpanded} />,
        headerClassName: 'hidden-xs actions-header',
        className: 'action-cell text-right',
    },
    {
        id: 'actions',
        Header: () => (
            <Dropdown id="dropdown-custom-menu" className="pull-right">
                <CustomToggle bsRole="toggle" />
                <Dropdown.Menu className="dropdown-menu-right">
                    <MenuItem eventKey="1">
                        <button className="btn btn-link" type="button">Repeat</button>
                    </MenuItem>
                    <MenuItem eventKey="2">
                        <button className="btn btn-link" type="button">Export to PDF</button>
                    </MenuItem>
                    <MenuItem eventKey="3">
                        <button className="btn btn-link" type="button">Print</button>
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        ),
        headerClassName: 'andes-table-mobile-header pull-right',
        Cell: () => (
            <Dropdown id="dropdown-custom-menu">
                <CustomToggle bsRole="toggle" />
                <Dropdown.Menu className="dropdown-menu-right">
                    <MenuItem eventKey="1">
                        <button className="btn btn-link" type="button">Repeat</button>
                    </MenuItem>
                    <MenuItem eventKey="2">
                        <button className="btn btn-link" type="button">Export to PDF</button>
                    </MenuItem>
                    <MenuItem eventKey="3">
                        <button className="btn btn-link" type="button">Print</button>
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        ),
        className: 'action-cell menu-button hidden-xs',
    },
];
