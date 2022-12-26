import React from 'react';
import { Col, Grid, Row } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Layout/Grid`,
    component: Grid,
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
    <Grid {...args} style={{ border: 'dashed red' }}>
        <Row style={{ borderBottom: 'dashed red' }}>
            <Col xs={12} md={8}>test1</Col>
            <Col xs={6} md={4}>test1</Col>
        </Row>
        <Row>
            <Col xs={6} xsOffset={6}>test2</Col>
        </Row>
    </Grid>
);

export const GridComponent = Template.bind({});
GridComponent.args = {
};
