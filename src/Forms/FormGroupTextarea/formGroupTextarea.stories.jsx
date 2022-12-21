import React from 'react';
import { FormGroupTextarea as FormGroupTextareaComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../../const';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: `${PAYSERA_COMPONENTS}/Forms/FormGroupTextarea`,
    component: FormGroupTextareaComponent,
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
        rows: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        label: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        placeholder: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        autofocus: {
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
    },
};

const Template = args => (<FormGroupTextareaComponent {...args} />);

export const FormGroupTextarea = Template.bind({});

FormGroupTextarea.args = {
};
