import React from 'react';
import {
    Button, ButtonToolbar, OverlayTrigger as OverlayTriggerComponent, Popover,
} from '@paysera/react-common';
import { TYPE, PLACEMENT_TYPE, TRIGGER_TYPE } from '../const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: 'Popover Components/OverlayTrigger',
    component: Popover,
    args: {
        overlay: <Popover>Holy guacamole!</Popover>,
        trigger: 'hover',
        placement: 'bottom',
        children: <Button>Popover</Button>,
    },
    argTypes: {
        children: {
            control: TYPE,
            ...getComponentPropType(TYPE),
        },
        overlay: {
            control: TYPE,
            ...getComponentPropType(TYPE),
        },
        placement: {
            control: { type: 'radio' },
            options: PLACEMENT_TYPE,
            ...getComponentPropType(PLACEMENT_TYPE),
        },
        trigger: {
            control: { type: 'radio' },
            options: TRIGGER_TYPE,
            ...getComponentPropType(TRIGGER_TYPE),
        },
    },
};

const Template = args => (
    <ButtonToolbar>
        <OverlayTriggerComponent{...args} />
    </ButtonToolbar>
);

export const OverlayTrigger = Template.bind({});
