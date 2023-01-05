import React from 'react';
import { Panel } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { PANEL_STYLE_OPTIONS } from '../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Panels/CommonPanel`,
    component: Panel,
    argTypes: {
        bsStyle: {
            options: PANEL_STYLE_OPTIONS,
            control: { type: 'radio' },
            ...getComponentPropType(PANEL_STYLE_OPTIONS),
        },
        expanded: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        eventKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        id: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        onToggle: {
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (
    <Panel {...args}>
        <Panel.Heading>
            <Panel.Title>Panel heading</Panel.Title>
        </Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
    </Panel>
);

export const PanelSuccess = Template.bind({});
export const PanelPrimary = Template.bind({});
export const PanelInfo = Template.bind({});
export const PanelWarning = Template.bind({});
export const PanelDanger = Template.bind({});

PanelPrimary.args = {
    bsStyle: 'primary',
};

PanelSuccess.args = {
    bsStyle: 'success',
};

PanelInfo.args = {
    bsStyle: 'info',
};

PanelWarning.args = {
    bsStyle: 'warning',
};

PanelDanger.args = {
    bsStyle: 'danger',
};

Panel.displayName = 'Panel';
