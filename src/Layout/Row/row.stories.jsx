import React from 'react';
import { Col, Row } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Layout/Row`,
    component: Row,
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
        <Row {...args} style={{ borderBottom: 'dashed red' }}>
            <Col xs={12} md={8}>test1</Col>
            <Col xs={6} md={4}>test1</Col>
        </Row>
        <Row {...args}>
            <Col xs={6} xsOffset={6}>test2</Col>
        </Row>
    </>
);

export const RowComponent = Template.bind({});
RowComponent.args = {
};
