import React from 'react';
import { Panel as PanelComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { PANEL_STYLE_OPTIONS } from '../const';

export default {
    title: 'Panels/CommonPanel',
    component: PanelComponent,
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
    <PanelComponent {...args}>
        <PanelComponent.Heading>
            <PanelComponent.Title>Panel heading</PanelComponent.Title>
        </PanelComponent.Heading>
        <PanelComponent.Body>Panel content</PanelComponent.Body>
    </PanelComponent>
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

PanelComponent.displayName = 'Panel';
