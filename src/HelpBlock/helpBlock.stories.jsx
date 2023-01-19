import React from 'react';
import {
    Form, FormGroup, HelpBlock,
} from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../const';
import withReduxForm from '../utils/withReduxForm';

export default {
    title: `${PAYSERA_COMPONENTS}/HelpBlock`,
    component: Form,
    decorators: [
        withReduxForm,
    ],
};

const Template = args => (
    <Form {...args}>
        <FormGroup placeholder="Test" />
        <HelpBlock>I`m helper block</HelpBlock>
    </Form>
);

export const HelpBlockComponent = Template.bind({});
