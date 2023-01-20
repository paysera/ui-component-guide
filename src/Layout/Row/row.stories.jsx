import React from 'react';
import { Col, Row as RowComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import '../../styles/storybook.css';

export default {
    title: 'Layout/Row',
    component: RowComponent,
    argTypes: {
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        componentClass: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
    },
};

const Template = args => (
    <>
        <RowComponent {...args}>
            <Col xs={12} md={8}>
                <code>
                    {'<Col xs={12} md={8}/>'}
                </code>
            </Col>
            <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4}/>'}</code>
            </Col>
        </RowComponent>
        <RowComponent {...args}>
            <Col xs={6} xsOffset={6}>
                <code>{'<Col xs={6} xsOffset={6}/>'}</code>
            </Col>
        </RowComponent>
    </>
);

export const Row = Template.bind({});
