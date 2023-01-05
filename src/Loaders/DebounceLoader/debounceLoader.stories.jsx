import React from 'react';
import { DebounceLoader as DebounceLoaderComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE, PAYSERA_COMPONENTS } from '../../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Loaders/DebounceLoader`,
    component: DebounceLoaderComponent,
    argTypes: {
        bounceTimeout: {
            control: 'number',
            ...getComponentPropType('number', 1000),
        },
        children: {
            control: 'text',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        loader: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
    },
};

const Template = args => <DebounceLoaderComponent {...args} />;

export const DebounceLoader = Template.bind({});
DebounceLoader.args = {
    children: 'test',
    bounceTimeout: 1000,
    loader: true,
};
