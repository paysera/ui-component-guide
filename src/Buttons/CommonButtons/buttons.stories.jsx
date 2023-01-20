import React from 'react';
import { Button } from '@paysera/react-common';
import { BTN_SIZE_OPTIONS, BTN_STYLE_OPTIONS, BTN_TYPE_OPTIONS } from './const';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../../const';

export default {
    title: 'Buttons/Common Buttons',
    component: Button,
    args: {
        active: false,
        block: false,
        children: 'Label',
        disabled: false,
    },
    argTypes: {
        onClick: {
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
        bsStyle: {
            options: BTN_STYLE_OPTIONS,
            ...getComponentPropType(BTN_STYLE_OPTIONS, 'default'),
            control: { type: 'radio' },
        },
        bsSize: {
            options: BTN_SIZE_OPTIONS,
            ...getComponentPropType(BTN_SIZE_OPTIONS),
            control: { type: 'radio' },
        },
        type: {
            options: BTN_TYPE_OPTIONS,
            ...getComponentPropType(BTN_TYPE_OPTIONS, 'button'),
            control: { type: 'radio' },
        },
        disabled: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        active: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        block: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
    },
};

const Template = args => (<Button {...args} />);

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});
export const Link = Template.bind({});

Primary.args = {
    bsStyle: 'primary',
};

Success.args = {
    bsStyle: 'success',
};

Info.args = {
    bsStyle: 'info',
};

Warning.args = {
    bsStyle: 'warning',
};

Danger.args = {
    bsStyle: 'danger',
};

Link.args = {
    bsStyle: 'link',
};
