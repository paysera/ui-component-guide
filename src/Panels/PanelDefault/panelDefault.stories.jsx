import React from 'react';
import { Panel } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Panels/PanelDefault`,
    component: Panel,
    args: {
    },
    argTypes: {
        expanded: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        id: {
            control: CHILDREN_TYPE,
            ...getComponentPropType(CHILDREN_TYPE),
        },
        onToggle: {
            ...getComponentPropType('function'),
        },
        eventKey: {
            control: CHILDREN_TYPE,
            ...getComponentPropType(CHILDREN_TYPE),
        },
    },
};

const Template = args => (
    <Panel {...args}>
        <Panel.Body>Basic panel example</Panel.Body>
    </Panel>
);

export const PanelDefault = Template.bind({});
PanelDefault.args = {
};

Panel.displayName = 'Panel';
