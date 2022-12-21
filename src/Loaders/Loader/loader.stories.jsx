import React from 'react';
import { Loader as LoaderComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE, PAYSERA_COMPONENTS } from '../../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Loaders/Loader`,
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
        loader: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
    },
};

const Template = args => <LoaderComponent {...args} />;

export const Loader = Template.bind({});
Loader.args = {
};
