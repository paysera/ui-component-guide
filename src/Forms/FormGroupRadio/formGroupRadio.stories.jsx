import React from 'react';
import { FormGroupRadio as FormGroupRadioComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../../const';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: `${PAYSERA_COMPONENTS}/Forms/FormGroupRadio`,
    component: FormGroupRadioComponent,
    args: {
        label: 'Label',
    },
    decorators: [
        withReduxForm,
    ],
    argTypes: {
        wrapperClassName: {
            control: 'text',
            ...getComponentPropType('string', 'radio'),
        },
        label: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        disabled: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        value: {
            ...getComponentPropType('any'),
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
                value: any,
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

const Template = args => (<FormGroupRadioComponent {...args} />);

export const FormGroupRadio = Template.bind({});

FormGroupRadio.args = {
};
