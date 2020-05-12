import React from 'react';
import { Popover, ButtonToolbar, OverlayTrigger, Button } from 'react-bootstrap';

export default { title: 'Popovers' };

const popoverLeft = (
    <Popover id="popover-positioned-left" title="Popover left">
        <strong>Holy guacamole!</strong> Check this info.
    </Popover>
);

const popoverTop = (
    <Popover id="popover-positioned-top" title="Popover top">
        <strong>Holy guacamole!</strong> Check this info.
    </Popover>
);

const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
    </Popover>
);

const popoverRight = (
    <Popover id="popover-positioned-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
    </Popover>
);

export const Popovers = () => (
    <div>
        <h2>Popovers add small overlays of content, like those on the iPad, to any element for housing secondary information.</h2>
        <div style={{ height: 220 }}>
            <Popover
                id="popover-basic"
                placement="bottom"
                positionLeft={200}
                positionTop={150}
                title="Popover right"
            >
                And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popover>
        </div>

        <ButtonToolbar>
            <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button>Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                <Button>Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                <Button>Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                <Button>Holy guacamole!</Button>
            </OverlayTrigger>
        </ButtonToolbar>
    </div>
);
