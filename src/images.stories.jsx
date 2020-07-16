import React from 'react';
import {
    Grid, Row, Col, Image, Thumbnail, Button,
} from 'react-bootstrap';

export default { title: 'Images' };

export const Images = () => (
    <div>
        <h2>Image shapes</h2>

        <Grid>
            <Row>
                <Col xs={12} md={8}>
                    <Image src="https://via.placeholder.com/180" rounded />
                </Col>
                <Col xs={12} md={8}>
                    <Image src="https://via.placeholder.com/180" circle />
                </Col>
                <Col xs={12} md={8}>
                    <Image src="https://via.placeholder.com/180" thumbnail />
                </Col>
            </Row>
        </Grid>

        <h2>Responsiveness</h2>

        <div>
            <p>
                Use the
                <code>responsive</code>
                {' '}
                to scale image nicely to the parent element.
            </p>
            <Image src="https://via.placeholder.com/180" responsive />
        </div>

        <h3>Anchor Thumbnail</h3>

        <Grid fluid>
            <Row>
                <Col xs={12} md={6}>
                    <Thumbnail href="#" alt="171x180" src="https://via.placeholder.com/180" />
                </Col>
                <Col xs={12} md={6}>
                    <Thumbnail href="#" alt="171x180" src="https://via.placeholder.com/180" />
                </Col>
                <Col xs={12} md={6}>
                    <Thumbnail href="#" alt="171x180" src="https://via.placeholder.com/180" />
                </Col>
            </Row>
        </Grid>

        <h3>Divider Thumbnail</h3>

        <Grid fluid>
            <Row>
                <Col xs={12} md={6}>
                    <Thumbnail src="https://via.placeholder.com/180" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={6}>
                    <Thumbnail src="https://via.placeholder.com/180" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={6}>
                    <Thumbnail src="https://via.placeholder.com/180" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
    </div>
);
