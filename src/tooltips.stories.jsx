import React from 'react';
import {
    Tooltip, ButtonToolbar, Button, OverlayTrigger,
} from 'react-bootstrap';

export default { title: 'Tooltips' };

const tooltip = (
    <Tooltip id="tooltip">
        <strong>Holy guacamole!</strong>
        {' '}
        Check this info.
    </Tooltip>
);

export const Tooltips = () => (
    <div>
        <h2>Tooltip alignment</h2>

        <div style={{ height: 50 }}>
            <Tooltip placement="right" className="in" id="tooltip-right">
                Tooltip right
            </Tooltip>
        </div>
        <div style={{ height: 50 }}>
            <Tooltip placement="top" className="in" id="tooltip-top">
                Tooltip top
            </Tooltip>
        </div>
        <div style={{ height: 50 }}>
            <Tooltip placement="left" className="in" id="tooltip-left">
                Tooltip left
            </Tooltip>
        </div>
        <div style={{ height: 50 }}>
            <Tooltip placement="bottom" className="in" id="tooltip-bottom">
                Tooltip bottom
            </Tooltip>
        </div>

        <h2>Tooltip triggering on hover</h2>

        <ButtonToolbar>
            <OverlayTrigger placement="left" overlay={tooltip}>
                <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={tooltip}>
                <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={tooltip}>
                <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="right" overlay={tooltip}>
                <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>
        </ButtonToolbar>
    </div>
);
