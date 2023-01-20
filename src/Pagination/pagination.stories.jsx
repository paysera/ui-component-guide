import React from 'react';
import { Pagination as PaginationComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Pagination',
    component: PaginationComponent,
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

const Template = args => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});
