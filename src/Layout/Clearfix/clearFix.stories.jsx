import React from 'react';
import { Col, Row, Clearfix } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: `${PAYSERA_COMPONENTS}/Layout/Clearfix`,
    component: Clearfix,
    argTypes: {
        visibleXsBlock: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        visibleSmBlock: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        visibleMdBlock: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        visibleLgBlock: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
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
    <Clearfix {...args} style={{ border: 'dashed red', padding: '8px' }}>
        <Row style={{ borderBottom: 'dashed red' }}>
            <Col md={8}>test1</Col>
            <Col md={4}>test1</Col>
        </Row>
        <Row>
            <Col lg={6}>test2</Col>
        </Row>
    </Clearfix>
);

export const ClearfixComponent = Template.bind({});
ClearfixComponent.args = {
};
