import React from 'react';
import { TabContent, TabPane, TabContainer as TabContainerComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { TABS_ID_OPTIONS } from '../const/const';

export default {
    title: 'Tabs Components/TabContainer',
    component: TabContainerComponent,
    args: {
        defaultActiveKey: 1,
    },
    argTypes: {
        id: {
            ...getComponentPropType(TABS_ID_OPTIONS),
        },
        defaultActiveKey: {
            control: 'number',
            ...getComponentPropType('number', 1),
        },
        activeKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        generateChildId: {
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (
    <TabContainerComponent {...args}>
        <TabContent>
            <TabPane eventKey={1}>
                Tab 1 content
            </TabPane>
            <TabPane eventKey={2}>
                Tab 2 content
            </TabPane>
            <TabPane eventKey={3}>
                Tab 3 content
            </TabPane>
        </TabContent>
    </TabContainerComponent>
);

export const TabContainer = Template.bind({});

TabContainer.displayName = 'TabContainer';
