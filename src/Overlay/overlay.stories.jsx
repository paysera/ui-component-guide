import React, { useRef, useState } from 'react';
import { Button, Overlay, Tooltip } from '@paysera/react-common';
import { PAYSERA_COMPONENTS } from '../const';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ANIMATION_TYPE, PLACEMENT_TYPE } from './const';
import '../styles/storybook.css';

export default {
    title: `${PAYSERA_COMPONENTS}/Overlay`,
    component: Overlay,
    args: {
        placement: 'top',
    },
    argTypes: {
        show: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        rootClose: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        onHide: {
            ...getComponentPropType('function'),
        },
        animation: {
            control: ANIMATION_TYPE,
            ...getComponentPropType(ANIMATION_TYPE),
        },
        onEnter: {
            ...getComponentPropType('function'),
        },
        onEntering: {
            ...getComponentPropType('function'),
        },
        onEntered: {
            ...getComponentPropType('function'),
        },
        onExit: {
            ...getComponentPropType('function'),
        },
        onExiting: {
            ...getComponentPropType('function'),
        },
        onExited: {
            ...getComponentPropType('function'),
        },
        placement: {
            options: PLACEMENT_TYPE,
            control: { type: 'radio' },
            ...getComponentPropType(PLACEMENT_TYPE),
        },
    },
};

const Template = (args) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>
            <Button
                ref={target}
                onClick={() => setShow(prevState => !prevState)}
            >
                Click me!
            </Button>
            <Overlay {...args} target={target.current} show={show}>
                <Tooltip>Tooltip overload!</Tooltip>
            </Overlay>
        </>
    );
};
export const OverlayComponent = Template.bind({});
OverlayComponent.args = {
};
