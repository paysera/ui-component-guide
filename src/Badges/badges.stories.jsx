import React from 'react';
import { Badge } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../const';
import { PULL_RIGHT_VARIANT } from './const';

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
        pullRight: {
            options: PULL_RIGHT_VARIANT,
            control: { type: 'radio' },
            ...getComponentPropType(PULL_RIGHT_VARIANT, false),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('text'),
        },
    },
};

const Template = args => <Badge {...args} />;

export const pullRightFalse = Template.bind({});
export const pullRightTrue = Template.bind({});

pullRightFalse.args = {
    pullRight: false,
};

pullRightTrue.args = {
    pullRight: true,
};
