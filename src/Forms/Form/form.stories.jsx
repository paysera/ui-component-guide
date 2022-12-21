import React from 'react';
import { Form as FormComponent, FormGroup, FormGroupRadio } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../../const';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: `${PAYSERA_COMPONENTS}/Forms/Form`,
    component: FormComponent,
    decorators: [
        withReduxForm,
    ],
    argTypes: {
        inline: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        horizontal: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
    },
};

const Template = args => (
    <FormComponent {...args}>
        <FormGroup placeholder="Test" />
        <FormGroupRadio label="test" />
        <FormGroupRadio label="test 2" />
    </FormComponent>
);

export const Form = Template.bind({});

Form.args = {
};