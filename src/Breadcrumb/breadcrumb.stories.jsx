import { Breadcrumb } from '@paysera/react-common';
import React from 'react';
import { PAYSERA_COMPONENTS } from '../const';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Breadcrumb`,
    component: Breadcrumb,
    argTypes: {
        active: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        href: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        target: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        title: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
    },
};

const Template = args => (
    <Breadcrumb>
        <Breadcrumb.Item {...args}>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Library</Breadcrumb.Item>
        <Breadcrumb.Item>Data</Breadcrumb.Item>
    </Breadcrumb>
);

export const BreadcrumbComponent = Template.bind({});
BreadcrumbComponent.args = {
    href: 'http://getbootstrap.com/components/#breadcrumbs',
};
