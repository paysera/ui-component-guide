import React, { useState } from 'react';
import { SwitchButton } from '@paysera/react-common';

export default { title: 'SwitchButton' };

const ControlledSwitch = ({
        loading = false,
        className= '',
    }) => {
    const [enabled, setEnabled] = useState(true);
    const toggle = () => setEnabled(!enabled);

    return (
        <SwitchButton
            className={className}
            enabled={enabled}
            toggle={toggle}
            loading={loading}
        />
    );
};

export const SwitchButtons = () => (
    <div>
        <h2 className="page-header">{'SwitchButton'}</h2>
        <div className="m-b-40">
            <h3>Import</h3>
            <pre>
                {'import { SwitchButton } from \'@paysera/react-common\';'}
            </pre>
        </div>

        <div className="m-b-40">
            <h3>Props</h3>
            <div><code>toggle</code> - function - required</div>
            <div><code>enabled</code> - boolean - required</div>
            <div><code>loading</code> - boolean - required</div>
        </div>

        <div className="m-b-40">
            <h3>With control props</h3>
            <p>
                This Switch button can be controlled with {' '} <code>toggle</code> {' '}
                and {' '} <code>enabled</code>{' '} props.
            </p>
            <ControlledSwitch />
        </div>

        <div className="m-b-40">
            <h3>Loading indicator</h3>
            <p>
                With the boolean{' '}<code>loading</code>{' '}
                prop, you can indicate if it is in loading state.
            </p>
            <ControlledSwitch loading />
        </div>

        <div className="m-b-40">
            <h3>className prop</h3>
            <p>Also, supports {' '}<code>className</code> {' '} prop.</p>
            <pre>{'<SwitchButton className="my-class" />'}</pre>
        </div>
    </div>
);
