import React from 'react';
import { Panel, PanelGroup as PanelGroupComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../const';

export default {
    title: 'Panels/PanelGroup',
    component: PanelGroupComponent,
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
    <PanelGroupComponent {...args}>
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
    </PanelGroupComponent>
);

export const PanelGroup = Template.bind({});

Panel.displayName = 'Panel';
PanelGroupComponent.displayName = 'PanelGroup';
