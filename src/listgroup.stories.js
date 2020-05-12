import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default { title: 'ListGroups' };

export const ListGroups = () => (
    <div>
        <p>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</p>
        <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
        </ListGroup>
    </div>
);

export const Linked = () => (
    <div>
        <p>Set the <code>href</code> or <code>onClick</code> prop on <code>ListGroupItem</code>, to create a linked or clickable element.</p>
        <ListGroup>
            <ListGroupItem href="#link1">Link 1</ListGroupItem>
            <ListGroupItem href="#link2">Link 2</ListGroupItem>
            <ListGroupItem onClick={() => alert('clicked')}>Trigger an alert</ListGroupItem>
        </ListGroup>
    </div>
);

export const Styling = () => (
    <div>
        <h3>Styling by state</h3>
        <p>Set the <code>active</code> or <code>disabled</code> prop to <code>true</code> to mark or disable the item.</p>
        <ListGroup>
            <ListGroupItem href="#" active>
                Link 1
            </ListGroupItem>
            <ListGroupItem href="#">Link 2</ListGroupItem>
            <ListGroupItem href="#" disabled>
                Link 3
            </ListGroupItem>
        </ListGroup>

        <h3>Styling by color</h3>
        <p>Set the <code>bsStyle</code> prop to style the item</p>
        <ListGroup>
            <ListGroupItem bsStyle="success">Success</ListGroupItem>
            <ListGroupItem bsStyle="info">Info</ListGroupItem>
            <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
            <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
        </ListGroup>
    </div>
);

export const WithHeaders = () => (
    <div>
        <p>Set the <code>header</code> prop to create a structured item, with a heading and a body area.</p>
        <ListGroup>
            <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
            <ListGroupItem header="Heading 2" href="#">
                Linked item
            </ListGroupItem>
            <ListGroupItem header="Heading 3" bsStyle="danger">
                Danger styling
            </ListGroupItem>
        </ListGroup>
    </div>
);
