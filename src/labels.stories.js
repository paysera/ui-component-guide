import React from 'react';
import { Label } from 'react-bootstrap';

export default { title: 'Labels' };

export const Labels = () => (
    <div>
        <p>Create a <code>&lt;Label&gt;label&lt;/Label&gt;</code> to highlight information</p>
        <div>
            <h1>
                Example heading <Label>New</Label>
            </h1>
            <h2>
                Example heading <Label>New</Label>
            </h2>
            <h3>
                Example heading <Label>New</Label>
            </h3>
            <h4>
                Example heading <Label>New</Label>
            </h4>
            <h5>
                Example heading <Label>New</Label>
            </h5>
            <p>
                Example heading <Label>New</Label>
            </p>
        </div>
        <h2>Available variations</h2>
        <div>
            <p>Add any of the below mentioned modifier classes to change the appearance of a label.</p>
            <Label bsStyle="default">Default</Label>{' '}
            <Label bsStyle="primary">Primary</Label>{' '}
            <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>{' '}
            <Label bsStyle="warning">Warning</Label>{' '}
            <Label bsStyle="danger">Danger</Label>
        </div>
    </div>
);

