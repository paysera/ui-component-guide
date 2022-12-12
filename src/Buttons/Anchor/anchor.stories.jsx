import React from 'react';
import { Anchor as AnchorComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { HTML_TARGET_TYPES, PAYSERA_COMPONENTS } from '../../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Buttons/Anchor`,
    component: AnchorComponent,
    args: {
        label: 'Label',
        url: '',
    },
    argTypes: {
        label: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        url: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        classes: {
            ...getComponentPropType('string[]'),
        },
        target: {
            options: HTML_TARGET_TYPES,
            ...getComponentPropType(HTML_TARGET_TYPES),
            control: { type: 'radio' },
        },
    },
};

const Template = args => (<AnchorComponent {...args} />);

export const Anchor = Template.bind({});

Anchor.args = {
};
