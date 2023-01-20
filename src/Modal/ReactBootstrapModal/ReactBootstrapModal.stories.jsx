import React from 'react';
import { Button, ReactBootstrapModal as ReactBootstrapModalComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { BACKDROP_TYPE } from './const';

export default {
    title: 'Modal/ReactBootstrapModal',
    component: ReactBootstrapModalComponent,
    argTypes: {
        customProps: {
            ...getComponentPropType(`{
                        size: string,
                        bsSize: string
                        }`),
        },
        children: {
            ...getComponentPropType('function'),
        },
        loaded: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        backdrop: {
            control: { disable: true },
            ...getComponentPropType(BACKDROP_TYPE),
        },
        Title: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
        Body: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
        Footer: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
    },
};

const Template = args => (
    <ReactBootstrapModalComponent
        {...args}
        Title={() => <div>Modal heading</div>}
        Body={({ hideModal }) => (
            <>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur
                </p>
                <Button style={{ marginRight: '5px' }} bsStyle="primary">confirm</Button>
                <Button onClick={hideModal} bsStyle="primary">close</Button>
            </>
)}
        Footer={() => <div>Modal footer</div>}
    >
        {({ showModal }) => (
            <Button bsStyle="primary" onClick={() => showModal()}>
                Click to open modal
            </Button>
        )}
    </ReactBootstrapModalComponent>
);

export const ReactBootstrapModal = Template.bind({});
