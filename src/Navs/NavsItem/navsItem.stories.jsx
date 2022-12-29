import React from 'react';
import { Nav, NavItem } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Navs/NavItem`,
    component: NavItem,
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
        <NavItem {...args}>
            NavItem 1 content
        </NavItem>
    </Nav>
);

export const NavItemComponent = Template.bind({});
NavItemComponent.args = {
};
