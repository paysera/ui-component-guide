import React from 'react';
import { Breadcrumb as BreadcrumbComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Breadcrumb',
    component: BreadcrumbComponent,
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
    <BreadcrumbComponent>
        <BreadcrumbComponent.Item {...args}>Home</BreadcrumbComponent.Item>
        <BreadcrumbComponent.Item>Library</BreadcrumbComponent.Item>
        <BreadcrumbComponent.Item>Data</BreadcrumbComponent.Item>
    </BreadcrumbComponent>
);

export const Breadcrumb = Template.bind({});

Breadcrumb.args = {
    href: 'http://getbootstrap.com/components/#breadcrumbs',
};
