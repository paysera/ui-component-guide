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
    <Clearfix {...args}>
        <Row className="show-row">
            <Col xs={12} md={8} className="show-col">
                <code>
                    {'<Col xs={12} md={8}/>'}
                </code>
            </Col>
            <Col xs={6} md={4} className="show-col">
                <code>{'<Col xs={6} md={4}/>'}</code>
            </Col>
        </Row>
        <Row>
            <Col xs={6} xsOffset={6} className="show-col">
                <code>{'<Col xs={6} xsOffset={6}/>'}</code>
            </Col>
        </Row>
    </Clearfix>
);

export const ClearfixComponent = Template.bind({});
ClearfixComponent.args = {
};
