import React from 'react';
import { LargeButton as LargeButtonComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE, PAYSERA_COMPONENTS } from '../../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Buttons/LargeButton`,
    component: LargeButtonComponent,
    argTypes: {
        category: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        children: {
            control: { disable: true },
            ...getComponentPropType(CHILDREN_TYPE),
        },
        onClick: {
            control: { disabled: true },
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (<LargeButtonComponent {...args} />);

export const LargeButton = Template.bind({});

LargeButton.args = {
    category: 'Category',
    children: (
        <>
            <i className="fa fa-check" />
            Test
        </>
    ),
};
