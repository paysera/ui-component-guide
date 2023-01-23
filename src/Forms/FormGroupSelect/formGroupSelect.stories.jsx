import React from 'react';
import { FormGroupSelect as FormGroupSelectComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: 'Forms/FormGroupSelect',
    component: FormGroupSelectComponent,
    args: {
        label: 'Label',
        placeholderOption: 'Test placeholder',
        options: [{
            id: 'test',
            label: 'test',
        }, {
            id: 'test2',
            label: 'test2',
        }],
    },
    decorators: [
        withReduxForm,
    ],
    argTypes: {
        wrapperClassName: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        label: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        placeholderOption: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        disabled: {
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
        options: {
            ...getComponentPropType(`Array<{
                id: string,
                label: string,
            }>`),
        },
        classConfig: {
            ...getComponentPropType(`{
                selectField: string,
            }`),
        },
    },
};

const Template = args => (<FormGroupSelectComponent {...args} />);

export const FormGroupSelect = Template.bind({});
