import React from 'react';
import { FormGroup as FormGroupComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../../const';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: `${PAYSERA_COMPONENTS}/Forms/FormGroup`,
    component: FormGroupComponent,
    args: {
        label: 'Label',
    },
    decorators: [
        withReduxForm,
    ],
    argTypes: {
        wrapperClassName: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        type: {
            control: 'text',
            ...getComponentPropType('HTMLInputTypeAttribute'),
        },
        label: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        placeholder: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        autocomplete: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        autofocus: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        readOnly: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        input: {
            ...getComponentPropType(`{
                name: string,
                value: string,
                onChange: function,
                onBlur: function,
            }`),
        },
        classConfig: {
            ...getComponentPropType(`{
                inputField: string
            }`),
        },
    },
};

const Template = args => (<FormGroupComponent {...args} />);

export const FormGroup = Template.bind({});

FormGroup.args = {
};
