import React from 'react';
import { Popover } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../const';
import { CHILDREN_TYPE, PLACEMENT_TYPE } from './const';

export default {
    title: `${PAYSERA_COMPONENTS}/Popover`,
    component: Popover,
    args: {
        positionLeft: 200,
        positionTop: 50,
        title: 'Popover right',
    },
    argTypes: {
        id: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        placement: {
            control: { type: 'radio' },
            options: PLACEMENT_TYPE,
            ...getComponentPropType(PLACEMENT_TYPE),
        },
        positionTop: {
            control: 'number',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        positionLeft: {
            control: 'number',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        arrowOffsetTop: {
            control: 'number',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        arrowOffsetLeft: {
            control: 'number',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        title: {
            control: CHILDREN_TYPE,
            ...getComponentPropType(CHILDREN_TYPE),
        },
    },
};

export const PopoverComponent = args => (
    <div style={{ height: 50 }}>
        <Popover {...args}>
            And here is some amazing content
        </Popover>
    </div>
);
