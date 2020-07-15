import React from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';
import TwoLineCell from '../Components/TwoLineCell';
import ExpanderButton from '../Components/ExpanderButton';
import CustomToggle from '../Components/CustomToggle';

const columns = [{
    Header: <strong>Date</strong>,
    headerClassName: 'hidden-xs',
    className: 'text-sm-center text-xs-left xs-order-1 date-container',
    Cell: () => <TwoLineCell top='2020-06-29' bottom='14:06:07' />,
    maxWidth: 150,
}, {
    Header: <strong>Transfer No.</strong>,
    accessor: 'transfer',
    headerClassName: 'text-left hidden-xs',
    className: 'text-left hidden-xs',
    maxWidth: 140,
}, {
    Header: <strong>Recipient / Purpose</strong>,
    id: 'recipient',
    accessor: 'recipient',
    headerClassName: 'text-left hidden-xs',
    className: 'text-left white-space-normal fit-long-words details-column',
    // eslint-disable-next-line react/prop-types
    Cell: ({ original: recipient }) => (
        <TwoLineCell top={recipient.recipient.name} bottom={recipient.recipient.purpose} />
    ),
}, {
    id: 'amount',
    accessor: 'amount',
    Header: <strong>Amount</strong>,
    headerClassName: 'text-right hidden-xs',
    className: 'text-right font-weighted xs-order-1 xs-no-max-width',
    maxWidth: 140,
    // eslint-disable-next-line react/prop-types
    Cell: ({ original: data }) => <strong>{data.amount}</strong>,
}, {
    id: 'expander',
    expander: true,
    Header: () => <strong>Actions</strong>,
    // eslint-disable-next-line react/prop-types
    Expander: ({ isExpanded }) => <ExpanderButton isExpanded={!!isExpanded} />,
    headerClassName: 'hidden-xs actions-header',
    className: 'action-cell text-right',
}, {
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
    // eslint-disable-next-line react/prop-types
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
}];

export default columns;
