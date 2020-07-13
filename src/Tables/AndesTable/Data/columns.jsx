import React from 'react';
import { Button } from 'react-bootstrap';

import TwoLineCell from '../Components/TwoLineCell';
import ExpanderButton from '../Components/ExpanderButton';
import DottedDropdownMenu from '../Components/DottedDropdownMenu';

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
        <div className="row">
            <div className="col-xs-22"><strong>Actions</strong></div>
            <div className="col-xs-2">
                <DottedDropdownMenu
                    customClass="pull-right"
                    dropdownContent={[<Button bsStyle="link">Repeat</Button>, <Button bsStyle="link">Export to PDF</Button>, <Button bsStyle="link">Print</Button>]}
                />
            </div>
        </div>
    ),
    headerClassName: 'andes-table-mobile-header',
    // eslint-disable-next-line react/prop-types
    Cell: () => (
        <DottedDropdownMenu
            dropdownContent={[<Button bsStyle="link">Repeat</Button>, <Button bsStyle="link">Export to PDF</Button>, <Button bsStyle="link">Print</Button>]}
        />
    ),
    className: 'action-cell menu-button hidden-xs',
}];

export default columns;
