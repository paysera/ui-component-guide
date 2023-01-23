import React from 'react';
import {
    Form, FormGroup, HelpBlock as HelpBlockComponent,
} from '@paysera/react-common';
import withReduxForm from '../utils/withReduxForm';

export default {
    title: 'HelpBlock',
    component: Form,
    decorators: [
        withReduxForm,
    ],
};

const Template = args => (
    <Form {...args}>
        <FormGroup placeholder="Test" />
        <HelpBlockComponent>I`m helper block</HelpBlockComponent>
    </Form>
);

export const HelpBlock = Template.bind({});
