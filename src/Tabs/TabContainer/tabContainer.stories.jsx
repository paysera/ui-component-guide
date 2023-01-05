import React from 'react';
import { TabContent, TabPane, TabContainer } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { TABS_ID_OPTIONS } from '../const/const';

export default {
    title: `${PAYSERA_COMPONENTS}/Tabs/TabContainer`,
    component: TabContainer,
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
    <TabContainer {...args}>
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
    </TabContainer>
);

export const ContainerComponent = Template.bind({});
ContainerComponent.args = {
};

TabContainer.displayName = 'TabContainer';
