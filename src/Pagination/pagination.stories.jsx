import React from 'react';
import { Pagination } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../const';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Pagination`,
    component: Pagination,
    args: {
        pages: 6,
        page: 4,
        previousBtnText: 'prev',
        nextBtnText: 'next',
    },
    argTypes: {
        pages: {
            control: 'number',
            ...getComponentPropType('number', 6),
        },
        page: {
            control: 'number',
            ...getComponentPropType('number', 4),
        },
        previousBtnText: {
            control: 'text',
            ...getComponentPropType('string', 'prev'),
        },
        nextBtnText: {
            control: 'text',
            ...getComponentPropType('string', 'prev'),
        },
        onPageChange: {
            ...getComponentPropType('function'),
        },
        triggerOnPropChange: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
    },
};

const Template = args => <Pagination {...args} />;

export const PaginationComponent = Template.bind({});
PaginationComponent.args = {
};
