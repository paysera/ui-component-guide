import React from 'react';
import { Panel } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Panels/PanelFooter`,
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
        <Panel.Body>Panel content</Panel.Body>
        <Panel.Footer {...args}>Panel footer</Panel.Footer>
    </Panel>
);

export const PanelFooter = Template.bind({});
PanelFooter.args = {
};

Panel.displayName = 'Panel';
