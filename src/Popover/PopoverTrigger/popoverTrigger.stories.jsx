import React from 'react';
import {
    Button, ButtonToolbar, OverlayTrigger as OverlayTriggerComponent, Popover as PopoverComponent,
} from '@paysera/react-common';
import { Popover } from '../popover.stories';

export default {
    title: 'Popover Components/OverlayTrigger',
    component: PopoverComponent,
};

const Template = args => (
    <ButtonToolbar {...args}>
        <OverlayTriggerComponent trigger="click" placement="bottom" overlay={<Popover />}>
            <Button>Click Popover</Button>
        </OverlayTriggerComponent>
        <OverlayTriggerComponent trigger="focus" placement="top" overlay={<Popover />}>
            <Button>Focus Popover</Button>
        </OverlayTriggerComponent>
        <OverlayTriggerComponent trigger="hover" placement="right" overlay={<Popover />}>
            <Button>Hover Popover</Button>
        </OverlayTriggerComponent>
    </ButtonToolbar>
);

export const OverlayTrigger = Template.bind({});
