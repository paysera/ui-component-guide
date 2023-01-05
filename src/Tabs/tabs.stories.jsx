import React from 'react';
import { Tab, Tabs } from '@paysera/react-common';
import { CHILDREN_TYPE, PAYSERA_COMPONENTS } from '../const';
import { getComponentPropType } from '../utils/getComponentPropType';
import { TABS_ID_OPTIONS, TABS_STYLE_OPTIONS } from './const/const';

export default {
    title: `${PAYSERA_COMPONENTS}/Tabs`,
    component: Tabs,
    args: {
        defaultActiveKey: 1,
        bsStyle: 'tabs',
        animation: true,
    },
    argTypes: {
        defaultActiveKey: {
            control: 'number',
            ...getComponentPropType('number', 1),
        },
        activeKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        bsStyle: {
            options: TABS_STYLE_OPTIONS,
            ...getComponentPropType(TABS_STYLE_OPTIONS, 'tabs'),
            control: { type: 'radio' },
        },
        animation: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        mountOnEnter: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        unmountOnExit: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        id: {
            ...getComponentPropType(TABS_ID_OPTIONS),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        children: {
            control: CHILDREN_TYPE,
            ...getComponentPropType(CHILDREN_TYPE),
        },
    },
};

const Template = args => (
    <Tabs {...args}>
        <Tab eventKey={1} title="Tab 1">
            Tab 1 content
        </Tab>
        <Tab eventKey={2} title="Tab 2">
            Tab 2 content
        </Tab>
        <Tab eventKey={3} title="Tab 3">
            Tab 3 content
        </Tab>
    </Tabs>

);

export const TabsComponent = Template.bind({});
TabsComponent.args = {
};

Tabs.displayName = 'Tabs';
