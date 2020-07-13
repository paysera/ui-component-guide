import React from 'react';
import {
    Tabs, Tab, NavDropdown, MenuItem, NavItem, Nav, Row, Col,
} from 'react-bootstrap';

export default { title: 'Tabs' };

export const Tabulation = () => (
    <div>
        <h2>Basic tabs</h2>

        <div>
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Tab 1">
                    Tab 1 content
                </Tab>
                <Tab eventKey={2} title="Tab 2">
                    Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Tab 3" disabled>
                    Tab 3 content
                </Tab>
            </Tabs>
        </div>

        <h2>Tabs with Dropdown</h2>

        <div>
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                <Row className="clearfix">
                    <Col sm={24}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="first">Tab 1</NavItem>
                            <NavItem eventKey="second">Tab 2</NavItem>
                            <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
                                <MenuItem eventKey="3.1">Action</MenuItem>
                                <MenuItem eventKey="3.2">Another action</MenuItem>
                                <MenuItem eventKey="3.3">Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="3.4">Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Col>
                    <Col sm={24}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
                            <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                            <Tab.Pane eventKey="3.1">Tab 3.1 content</Tab.Pane>
                            <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>
                            <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
                            <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    </div>
);
