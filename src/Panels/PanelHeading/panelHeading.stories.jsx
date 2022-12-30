import React from 'react';
import { Panel } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Panels/PanelHeading`,
    component: Panel,
    argTypes: {
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        componentClass: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
    },
};

const Template = args => (
    <Panel>
        <Panel.Heading {...args}>Panel heading without a title</Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
    </Panel>
);

export const PanelHeading = Template.bind({});
PanelHeading.args = {
};

Panel.displayName = 'Panel';
