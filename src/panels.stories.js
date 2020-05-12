import React from 'react';
import { Panel, PanelGroup, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

export default { title: 'Panels' };

export const Panels = () => (
    <div>
        <h2>Panel encapsulates content and provides white background for elements</h2>
        <div style={{backgroundColor: '#e5e8ed', padding: '50px'}}>
            <p>Basic panel</p>
            <Panel onClick={() => alert('click!')}>
                <Panel.Body>Basic panel example</Panel.Body>
            </Panel>

            <div>
                <Panel>
                    <Panel.Heading>Panel heading without a title</Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
            </div>

            <Panel>
                <Panel.Body>Panel content</Panel.Body>
                <Panel.Footer>Panel footer</Panel.Footer>
            </Panel>

            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>

                <Panel bsStyle="success">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>

                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>

                <Panel bsStyle="warning">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>

                <Panel bsStyle="danger">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
            </div>

            <Panel>
                <Panel.Heading>Panel heading</Panel.Heading>
                <Panel.Body>Some default panel content here.</Panel.Body>
                <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>&hellip;</ListGroupItem>
                </ListGroup>
                <Panel.Body>Some more panel content here.</Panel.Body>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </Panel>

            <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
                <Panel eventKey="1">
                    <Panel.Heading>
                        <Panel.Title toggle>Panel heading 1</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>Panel content 1</Panel.Body>
                </Panel>
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>Panel heading 2</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>Panel content 2</Panel.Body>
                </Panel>
            </PanelGroup>

            <PanelGroup accordion id="accordion-example">
                <Panel eventKey="1">
                    <Panel.Heading>
                        <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                    </Panel.Body>
                </Panel>
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                    </Panel.Body>
                </Panel>
                <Panel eventKey="3">
                    <Panel.Heading>
                        <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                    </Panel.Body>
                </Panel>
            </PanelGroup>
        </div>
    </div>
);
