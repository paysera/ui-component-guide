import React from 'react';
import { SuspenseDebounceLoader as SuspenseDebounceLoaderComponent } from '@paysera/react-common';

export default {
    title: 'Loaders/SuspenseDebounceLoader',
    component: SuspenseDebounceLoaderComponent,
};

const Template = args => <SuspenseDebounceLoaderComponent {...args} />;

export const SuspenseDebounceLoader = Template.bind({});
