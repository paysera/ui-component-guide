import React from 'react';
import { Alert } from '@paysera/react-common';
import { ALERT_VARIANT } from './const';
import { getComponentPropType } from '../utils/getComponentPropType';
import { CHILDREN_TYPE, PAYSERA_COMPONENTS } from '../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Alerts`,
    component: Alert,
    args: {
        children: 'some text',
    },
    argTypes: {
        onDismiss: {
            control: { disabled: true },
            ...getComponentPropType('function'),
        },
        children: {
            control: 'text',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        closeLabel: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        bsStyle: {
            options: ALERT_VARIANT,
            control: { type: 'radio' },
            ...getComponentPropType(ALERT_VARIANT, 'success'),
        },
    },
};

const Template = args => <Alert {...args} />;

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
