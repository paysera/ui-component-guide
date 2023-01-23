import * as React from 'react';
import { AndesTable } from '@paysera/react-common';
import { Dropdown, MenuItem } from 'react-bootstrap';

import TwoLineCell from '../Components/TwoLineCell';
import CustomToggle from '../Components/CustomToggle';

const Default = () => (
    <AndesTable
        data={[
            {
                date: '2020-06-29T14:06:07',
                transferNo: '333131122',
                recipient: 'Loch Ness - LT8555555555447175',
                purpose: 'home decorations',
                amount: '3.50 EUR',
                details: [
                    { payer: 'John Doe', fee: '0.75 EUR' },
                    { payer: 'John Snow', fee: '0.00 EUR' },
                ],
            },
            {
                date: '2020-06-29T14:06:07',
                transferNo: '994311288',
                recipient: 'Natcho Ness - LT8555555555447175',
                purpose: 'home decorations',
                amount: '67.00 EUR',
                details: [
                    { payer: 'John Doe', fee: '0.75 EUR' },
                ],
            },
            {
                date: '2020-06-29T14:06:07',
                transferNo: '733903497',
                recipient: 'Jason Maurer - LT8555555555447144',
                purpose: 'home decorations',
                amount: '125.75 EUR',
                details: [
                    { payer: 'John Doe', fee: '0.00 EUR' },
                    { payer: 'John Snow', fee: '0.50 EUR' },
                    { payer: 'John Cena', fee: '1.15 EUR' },
                ],
            },
            {
                date: '2020-06-29T14:06:07',
                transferNo: '034987438',
                recipient: 'James Miguel - LT8555555555447175',
                purpose: 'home decorations',
                amount: '67.00 EUR',
                details: [
                    { payer: 'John Doe', fee: '0.75 EUR' },
                    { payer: 'John Cena', fee: '1.15 EUR' },
                ],
            },
            {
                date: '2020-06-29T14:06:07',
                transferNo: '112343784',
                recipient: 'Natcho Ness - LT8555555555447175',
                purpose: 'home decorations',
                amount: '67.00 EUR',
                details: [
                    { payer: 'John Doe', fee: '0.75 EUR' },
                    { payer: 'John Cena', fee: '1.15 EUR' },
                ],
            },
        ]}
        columns={[
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
                Header: () => <strong>Actions</strong>,
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
        ]}
    />
);

export default Default;
