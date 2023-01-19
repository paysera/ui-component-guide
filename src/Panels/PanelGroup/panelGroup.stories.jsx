import React from 'react';
import { Panel, PanelGroup } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Panels/PanelGroup`,
    component: PanelGroup,
    args: {
    },
    argTypes: {
        accordion: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        generateChildId: {
            ...getComponentPropType('function'),
        },
        activeKey: {
            control: CHILDREN_TYPE,
            ...getComponentPropType(CHILDREN_TYPE),
        },
        role: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => (
    <PanelGroup {...args}>
        <Panel eventKey="1">
            <Panel.Heading>
                <Panel.Title toggle>Panel heading 1</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Panel content 1</Panel.Body>
        </Panel>
        <Panel eventKey="2">
            <Panel.Heading>
                <Panel.Title toggle>Panel heading 2</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Panel content 2</Panel.Body>
        </Panel>
    </PanelGroup>
);

export const PanelGroupComponent = Template.bind({});
PanelGroupComponent.args = {
};

Panel.displayName = 'Panel';
PanelGroup.displayName = 'PanelGroup';
