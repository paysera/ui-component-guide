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
        <Row {...args} className="show-row">
            <Col xs={12} md={8} className="show-col">
                <code>
                    {'<Col xs={12} md={8}/>'}
                </code>
            </Col>
            <Col xs={6} md={4} className="show-col">
                <code>{'<Col xs={6} md={4}/>'}</code>
            </Col>
        </Row>
        <Row {...args}>
            <Col xs={6} xsOffset={6} className="show-col">
                <code>{'<Col xs={6} xsOffset={6}/>'}</code>
            </Col>
        </Row>
    </>
);

export const RowComponent = Template.bind({});
RowComponent.args = {
};
