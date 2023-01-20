import React from 'react';
import { Col, Row, Clearfix as ClearfixComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import '../../styles/storybook.css';

export default {
    title: 'Layout/Clearfix',
    component: ClearfixComponent,
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
    <ClearfixComponent {...args}>
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
            <Col xs={6} xsOffset={6}>
                <code>{'<Col xs={6} xsOffset={6}/>'}</code>
            </Col>
        </Row>
    </ClearfixComponent>
);

export const Clearfix = Template.bind({});
