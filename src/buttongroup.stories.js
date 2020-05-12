import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export default { title: 'ButtonGroup' };

export const ButtonGroups = (props) => (
    <div>
        <h2>Group a series of buttons together on a single line with the button group</h2>

        <ButtonToolbar>
            <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>8</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <h2>Sizing</h2>
        <ButtonToolbar>
            <ButtonGroup bsSize="large">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup bsSize="small">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup bsSize="xsmall">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <p>See possible variations <a href="https://getbootstrap.com/docs/3.3/components/#btn-groups" target="_blank">here</a>.</p>
    </div>
);

