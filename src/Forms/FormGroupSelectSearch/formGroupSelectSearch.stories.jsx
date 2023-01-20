import React from 'react';
import { FormGroupSelectSearch as FormGroupSelectSearchComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: 'Forms/FormGroupSelectSearch',
    component: FormGroupSelectSearchComponent,
    args: {
        label: 'Label',
        placeholderOption: 'Test placeholder',
        input: {
            name: 'test',
        },
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
        search: {
            control: 'function',
            ...getComponentPropType('(value: string, options: { id: string, label: string }[], setOptions: (value: string): void): void'),
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

const Template = args => (<FormGroupSelectSearchComponent {...args} />);

export const FormGroupSelectSearch = Template.bind({});
