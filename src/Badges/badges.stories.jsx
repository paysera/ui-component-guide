import React from 'react';
import { Badge as BadgeComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Badge',
    component: BadgeComponent,
    args: {
        children: 'text',
    },
    argTypes: {
        children: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        pullRight: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('text'),
        },
    },
};

const Template = args => <BadgeComponent {...args} />;

export const Badge = Template.bind({});
