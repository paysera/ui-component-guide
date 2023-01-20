import React from 'react';
import { Nav, NavItem as NavItemComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: 'Navs/NavItem',
    component: NavItemComponent,
    argTypes: {
        eventKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        active: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        disabled: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        href: {
            control: 'text',
            ...getComponentPropType('string', '/home'),
        },
        role: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        onClick: {
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (
    <Nav>
        <NavItemComponent {...args}>
            NavItemComponent 1 content
        </NavItemComponent>
    </Nav>
);

export const NavItem = Template.bind({});
