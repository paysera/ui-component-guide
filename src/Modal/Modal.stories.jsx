import React, { useState } from 'react';
import { Button, Modal } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { BACKDROP_TYPE, MODAL_SIZE } from './const';

export default {
    title: 'Modal',
    component: Modal,
    argTypes: {
        bsSize: {
            options: MODAL_SIZE,
            control: { type: 'radio' },
        },
        backdrop: {
            options: BACKDROP_TYPE,
            control: { type: 'radio' },
            ...getComponentPropType(BACKDROP_TYPE, false),
        },
        backdropClassName: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        keyboard: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        animation: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        autoFocus: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        enforceFocus: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        restoreFocus: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        show: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        onHide: {
            ...getComponentPropType('function'),
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
        dialogComponentClass: {
            control: 'elementType',
            ...getComponentPropType('elementType'),
        },
    },
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)} bsStyle="primary">Click to open modal</Button>
            <Modal {...args} show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export const ModalComponent = Template.bind({});
