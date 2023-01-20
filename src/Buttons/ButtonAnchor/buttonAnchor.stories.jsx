import React from 'react';
import { ButtonAnchor as ButtonAnchorComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: 'Buttons/ButtonAnchor',
    component: ButtonAnchorComponent,
    argTypes: {
        action: {
            control: { disabled: true },
            ...getComponentPropType('function'),
        },
        label: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => (<ButtonAnchorComponent {...args} />);

export const ButtonAnchor = Template.bind({});

ButtonAnchor.args = {
    label: 'Label',
    action: () => {},
};
