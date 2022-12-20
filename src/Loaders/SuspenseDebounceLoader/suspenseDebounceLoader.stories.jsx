import React from 'react';
import { SuspenseDebounceLoader as SuspenseDebounceLoaderComponent } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Loaders/SuspenseDebounceLoader`,
    component: SuspenseDebounceLoaderComponent,
};

const Template = args => <SuspenseDebounceLoaderComponent {...args} />;

export const SuspenseDebounceLoader = Template.bind({});
SuspenseDebounceLoader.args = {
};
