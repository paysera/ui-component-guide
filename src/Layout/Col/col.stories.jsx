import React from 'react';
import { Col as ColComponent, Row } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import '../../styles/storybook.css';

export default {
    title: 'Layout/Col',
    component: ColComponent,
    args: {
        xs: 12,
        md: 8,
    },
    argTypes: {
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        componentClass: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
        xs: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        sm: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        md: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        lg: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        xsHidden: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        smHidden: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        mdHidden: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        lgHidden: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        xsOffset: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        smOffset: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        mdOffset: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        lgOffset: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        xsPush: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        smPush: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        mdPush: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        lgPush: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        xsPull: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        smPull: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        mdPull: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        lgPull: {
            control: 'number',
            ...getComponentPropType('number'),
        },
    },
};

const Template = args => (
    <>
        <Row>
            <ColComponent {...args}>
                <code>
                    {'<Col xs={12} md={8}/>'}
                </code>
            </ColComponent>
            <ColComponent {...args}>
                <code>
                    {'<Col xs={12} md={8}/>'}
                </code>
            </ColComponent>
        </Row>
    </>
);

export const Col = Template.bind({});
