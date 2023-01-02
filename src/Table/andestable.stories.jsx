import React from 'react';
import { AndesTable } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../const';
import { getComponentPropType } from '../utils/getComponentPropType';

import data from './data/data';
import getFieldColumns from './data/columns';
import ExpanderComponent from './Components/ExpanderComponent';

export default {
    title: `${PAYSERA_COMPONENTS}/Table`,
    component: AndesTable,
    argTypes: {
        sortable: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        resizable: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        showPagination: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        filterable: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        horizontallyScrollable: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        loading: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        data: {
            ...getComponentPropType('Array<any>'),
        },
        columns: {
            ...getComponentPropType('Array<Column>'),
        },
        SubComponent: {
            ...getComponentPropType('ReactComponent'),
        },
        pageSizeOptions: {
            ...getComponentPropType('Array<number>', [5, 10, 20, 25, 50, 100]),
        },
    },
    args: {
        data,
        columns: getFieldColumns,
        SubComponent: ExpanderComponent,
        pageSizeOptions: [5, 10, 20, 25, 50, 100],
    },
};

const Template = args => <AndesTable {...args} />;

export const AndesTableComponent = Template.bind({});
