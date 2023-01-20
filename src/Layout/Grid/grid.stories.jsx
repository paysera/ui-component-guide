import React from 'react';
import { Col, Grid as GridComponent, Row } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import '../../styles/storybook.css';

export default {
    title: 'Layout/Grid',
    component: GridComponent,
    argTypes: {
        fluid: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
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
    <GridComponent {...args}>
        <Row>
            <Col xs={12} md={8}>
                <code>
                    {'<Col xs={12} md={8}/>'}
                </code>
            </Col>
            <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4}/>'}</code>
            </Col>
        </Row>

        <Row>
            <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4}/>'}</code>
            </Col>
            <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4}/>'}</code>
            </Col>
            <Col xsHidden md={4}>
                <code>{'<Col xsHidden md={4}/>'}</code>
            </Col>
        </Row>

        <Row>
            <Col xs={6} xsOffset={6}>
                <code>{'<Col xs={6} xsOffset={6}/>'}</code>
            </Col>
        </Row>

        <Row>
            <Col md={6} mdPush={6}>
                <code>{'<Col md={6} mdPush={6}/>'}</code>
            </Col>
            <Col md={6} mdPull={6}>
                <code>{'<Col md={6} mdPull={6}/>'}</code>
            </Col>
        </Row>
    </GridComponent>
);

export const Grid = Template.bind({});
