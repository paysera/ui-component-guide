import React from 'react';
import { Panel, PanelGroup } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Panels/Accordion`,
    component: Panel,
    argTypes: {
        accordion: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        expanded: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        id: {
            control: 'text',
            ...getComponentPropType('string'),
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
    <PanelGroup {...args}>
        <Panel eventKey="1">
            <Panel.Heading>
                <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            </Panel.Body>
        </Panel>
        <Panel eventKey="2">
            <Panel.Heading>
                <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            </Panel.Body>
        </Panel>
        <Panel eventKey="3">
            <Panel.Heading>
                <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            </Panel.Body>
        </Panel>
    </PanelGroup>
);

export const AccordionComponent = Template.bind({});
AccordionComponent.args = {
};

Panel.displayName = 'Panel';
