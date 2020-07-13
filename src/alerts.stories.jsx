import React from 'react';
import { Alert, Button } from 'react-bootstrap';

export default { title: 'Alerts' };

export const Alerts = (props) => (
    <div>
        <h2>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</h2>
        <Alert bsStyle="success"><strong>Well done!</strong> You successfully read this important alert message.</Alert>
        <Alert bsStyle="info"><strong>Heads up!</strong> This alert needs your attention, but it's not super important. </Alert>
        <Alert bsStyle="warning"><strong>Warning!</strong> Better check yourself, you're not looking too good. </Alert>
        <Alert bsStyle="danger"><strong>Oh snap!</strong> Change a few things up and try submitting again.</Alert>

        <h2>Dismissible alerts</h2>
        <Alert bsStyle="danger" onDismiss={() => alert('Clicked dismiss')}>
            <h4>Oh snap! You got an error!</h4>
            <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
                <Button bsStyle="danger">Take this action</Button>
                <span> or </span>
                <Button onClick={() => alert('Clicked hide alert')}>Hide Alert</Button>
            </p>
        </Alert>

        <h2>Links in alerts</h2>
        <Alert bsStyle="success">
            <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
        </Alert>
        <Alert bsStyle="info">
            <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
        </Alert>
        <Alert bsStyle="warning">
            <strong>Warning!</strong> Better check yourself, you're <a href="#" className="alert-link">not looking too good</a>.
        </Alert>
        <Alert bsStyle="danger">
            <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting again.
        </Alert>
    </div>
);
