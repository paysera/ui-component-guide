import React from 'react';
import { SwitchButton as SwitchButtonComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';

SwitchButtonComponent.displayName = 'SwitchButton';

export default {
    title: 'Buttons/SwitchButton',
    component: SwitchButtonComponent,
    argTypes: {
        toggle: {
            control: { disabled: true },
            ...getComponentPropType('function'),
        },
        enabled: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        loading: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        className: {
            control: 'text',
            ...getComponentPropType('text'),
        },
    },
};

const Template = args => <SwitchButtonComponent {...args} />;

export const SwitchButton = Template.bind({});
