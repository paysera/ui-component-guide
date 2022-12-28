import React from 'react';
import { Table } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../const';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Table`,
    component: Table,
    argTypes: {
        striped: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        bordered: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        condensed: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        hover: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        responsive: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => (
    <Table {...args}>
        <thead>
            <tr>
                <th />
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </Table>
);

export const TableComponent = Template.bind({});
TableComponent.args = {
};
