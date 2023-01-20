import React from 'react';
import { FormGroupCheckbox as FormGroupCheckboxComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: 'Forms/FormGroupCheckbox',
    component: FormGroupCheckboxComponent,
    args: {
        label: 'Label',
    },
    decorators: [
        withReduxForm,
    ],
    argTypes: {
        wrapperClassName: {
            control: 'text',
            ...getComponentPropType('string', 'checkbox'),
        },
        label: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        disabled: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        muteError: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        meta: {
            ...getComponentPropType(`{
                touched: boolean,
                error: string
            }`),
        },
        input: {
            ...getComponentPropType(`{
                checked: boolean,
                onChange: function,
                onBlur: function,
            }`),
        },
        classConfig: {
            ...getComponentPropType(`{
                label: string,
                input: string
            }`),
        },
    },
};

const Template = args => (<FormGroupCheckboxComponent {...args} />);

export const FormGroupCheckbox = Template.bind({});
