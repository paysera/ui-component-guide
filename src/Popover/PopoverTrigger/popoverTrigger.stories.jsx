import React from 'react';
import {
    Button, ButtonToolbar, OverlayTrigger as OverlayTriggerComponent, Popover,
} from '@paysera/react-common';

export default {
    title: 'Popover Components/OverlayTrigger',
    component: Popover,
};

const Template = args => (
    <ButtonToolbar {...args}>
        <OverlayTriggerComponent
            trigger="focus"
            placement="bottom"
            overlay={(<Popover>Holy guacamole!</Popover>)}
        >
            <Button>Focus Popover</Button>
        </OverlayTriggerComponent>
        <OverlayTriggerComponent
            trigger="hover"
            placement="bottom"
            overlay={(<Popover>Holy guacamole!</Popover>)}
        >
            <Button>Hover Popover</Button>
        </OverlayTriggerComponent>
        <OverlayTriggerComponent
            trigger="click"
            placement="right"
            overlay={(<Popover>Holy guacamole!</Popover>)}
        >
            <Button>Click Popover</Button>
        </OverlayTriggerComponent>
    </ButtonToolbar>
);

export const OverlayTrigger = Template.bind({});
