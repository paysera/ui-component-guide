import React from 'react';
import { Badge } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { CHILDREN_TYPE, PAYSERA_COMPONENTS } from '../const';
import { BADGE_VARIANT } from './const';

export default {
    title: `${PAYSERA_COMPONENTS}/Badges`,
    component: Badge,
    args: {
        children: 'text',
    },
    argTypes: {
        children: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        closeLabel: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        bsStyle: {
            options: BADGE_VARIANT,
            control: { type: 'radio' },
            ...getComponentPropType(BADGE_VARIANT, 'danger'),
        },
    },
};

const Template = args => <Badge {...args} />;

export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});

Success.args = {
    bsStyle: 'success',
};

Danger.args = {
    bsStyle: 'danger',
};

Warning.args = {
    bsStyle: 'warning',
};

Info.args = {
    bsStyle: 'info',
};
