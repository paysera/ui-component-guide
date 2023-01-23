import React from 'react';
import { Loader as LoaderComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../../const';

export default {
    title: 'Loaders/Loader',
    component: LoaderComponent,
    args: {
        children: 'test',
    },
    argTypes: {
        message: {
            control: 'text',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        children: {
            control: 'text',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        backgroundStyle: {
            ...getComponentPropType('string'),
        },
        loaded: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
    },
};

const Template = args => <LoaderComponent {...args} />;

export const Loader = Template.bind({});
