import React from 'react';
import { FormGroupTab as FormGroupTabComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import withReduxForm from '../../utils/withReduxForm';

export default {
    title: 'Forms/FormGroupTab',
    component: FormGroupTabComponent,
    args: {
        label: 'Label',
        placeholderOption: 'Test placeholder',
        tabs: [{
            id: 'test',
            name: 'test',
        }, {
            id: 'test2',
            name: 'test2',
        }],
    },
    decorators: [
        withReduxForm,
    ],
    argTypes: {
        includeAll: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        input: {
            ...getComponentPropType(`{
                value: string,
                onChange: function
            }`),
        },
        tabs: {
            ...getComponentPropType(`Array<{
                id: string,
                name: string,
                count: number,
            }>`),
        },
    },
};

const Template = args => (<FormGroupTabComponent {...args} />);

export const FormGroupTab = Template.bind({});
