import React from 'react';
import {
    Button, ButtonToolbar, OverlayTrigger, Popover,
} from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../../const';
import { PopoverComponent } from '../popover.stories';

export default {
    title: `${PAYSERA_COMPONENTS}/Popover/PopoverTrigger`,
    component: Popover,
};

const Template = args => (
    <ButtonToolbar {...args}>
        <OverlayTrigger trigger="click" placement="bottom" overlay={<PopoverComponent />}>
            <Button>Click Popover</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="focus" placement="top" overlay={<PopoverComponent />}>
            <Button>Focus Popover</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="hover" placement="right" overlay={<PopoverComponent />}>
            <Button>Hover Popover</Button>
        </OverlayTrigger>
    </ButtonToolbar>
);

export const PopoverTrigger = Template.bind({});
PopoverTrigger.args = {
};
