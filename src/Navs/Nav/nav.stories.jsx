import React from 'react';
import { Nav as NavComponent, NavItem } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import NAV_STYLE_OPTIONS from './const';

export default {
    title: 'Navs/Nav',
    component: NavComponent,
    args: {
        bsStyle: 'tabs',
    },
    argTypes: {
        bsStyle: {
            options: NAV_STYLE_OPTIONS,
            ...getComponentPropType(NAV_STYLE_OPTIONS, 'tabs'),
            control: { type: 'radio' },
        },
        activeKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        pullRight: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        pullLeft: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        stacked: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        justified: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        navbar: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        activeHref: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        role: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (
    <NavComponent {...args}>
        <NavItem eventKey={1} href="/home">
            NavItem 1 content
        </NavItem>
        <NavItem eventKey={2} title="Item">
            NavItem 2 content
        </NavItem>
        <NavItem eventKey={3} disabled>
            NavItem 3 content
        </NavItem>
    </NavComponent>
);

export const Nav = Template.bind({});
