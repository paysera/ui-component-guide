import React from 'react';
import { Alert as AlertComponent } from '@paysera/react-common';
import { ALERT_VARIANT } from './const';
import { getComponentPropType } from '../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../const';

export default {
    title: 'Alert',
    component: AlertComponent,
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

const Template = args => <AlertComponent {...args} />;

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
