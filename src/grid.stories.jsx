import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default { title: 'Grid' };

export const Default = () => (
    <div>
        <section className="info-section">
            <h2>Grid system</h2>
            <p>
                We use
                <code>24</code>
                {' '}
                column grid with
                <code>16px</code>
                {' '}
                gutter (
                <code>8px</code>
                {' '}
                on each column side). Width of grid depends on grid container.
            </p>
            <Grid>
                <Row>
                    {Array.from(Array(24).keys()).map(item => (
                        <Col xs={1} className="grid-cell">
                            <div className="grid-cell-content text-center">
                                Col
                                {item + 1}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </section>

        <section className="info-section">
            <p>
                Each column may be different width on different screen sizes, toggle browser size for preview.
                {' '}
                <strong>Current screen size is:</strong>
                <span className="badge badge-info visible-xs-inline-block">xs</span>
                <span className="badge badge-info visible-sm-inline-block">sm</span>
                <span className="badge badge-info visible-md-inline-block">md</span>
                <span className="badge badge-info visible-lg-inline-block">lg</span>
            </p>
            <Grid>
                <Row>
                    <Col xs={24} sm={12} md={8} lg={6} className="grid-cell">
                        <div className="grid-cell-content">
                            <div className="grid-cell-info">
                                <div className="grid-cell-data">
                                    Width of this cell is:
                                    <div>
                                        25% on
                                        <code>lg</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        33% on
                                        <code>md</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        50% on
                                        <code>sm</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        100% on
                                        <code>xs</code>
                                        {' '}
                                        screen size
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} className="grid-cell">
                        <div className="grid-cell-content">
                            <div className="grid-cell-info">
                                <div className="grid-cell-data">
                                    Width of this cell is:
                                    <div>
                                        25% on
                                        <code>lg</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        33% on
                                        <code>md</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        50% on
                                        <code>sm</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        100% on
                                        <code>xs</code>
                                        {' '}
                                        screen size
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} className="grid-cell">
                        <div className="grid-cell-content">
                            <div className="grid-cell-info">
                                <div className="grid-cell-data">
                                    Width of this cell is:
                                    <div>
                                        25% on
                                        <code>lg</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        33% on
                                        <code>md</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        50% on
                                        <code>sm</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        100% on
                                        <code>xs</code>
                                        {' '}
                                        screen size
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={24} lg={6} className="grid-cell">
                        <div className="grid-cell-content">
                            <div className="grid-cell-info">
                                <div className="grid-cell-data">
                                    Width of this cell is:
                                    <div>
                                        25% on
                                        <code>lg</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        100% on
                                        <code>md</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        50% on
                                        <code>sm</code>
                                        {' '}
                                        screen size
                                    </div>
                                    <div>
                                        100% on
                                        <code>xs</code>
                                        {' '}
                                        screen size
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>

        <section className="info-section">
            <p>Sample layout</p>

            <Grid>
                <Row>
                    <Col lg={8}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 33% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                    <Col lg={8}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 33% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                    <Col lg={8}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 33% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 25% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                    <Col lg={6}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 25% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                    <Col lg={6}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 25% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                    <Col lg={6}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 25% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 50% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                    <Col lg={12}>
                        <p className="grid-cell-content">
                            <div className="grid-cell-data">
                                Width of this cell is 50% on
                                {' '}
                                <code>lg</code>
                                {' '}
                                screen size 100% on all other screen sizes
                            </div>
                        </p>
                    </Col>
                </Row>
            </Grid>
        </section>

        <section className="info-section">
            <h2>Breakpoints</h2>
            <ul>
                <li>
                    Extra small devices: Either no media query since this is the default in Bootstrap (mobile-first) or
                    <code>xs</code>
                    {' '}
                    identifier (up to 767px)
                </li>
                <li>
                    Small devices (tablets and up): from 768px screen width and up,
                    <code>sm</code>
                    {' '}
                    identifier
                </li>
                <li>
                    Medium devices (desktops and up): from 992px screen width and up,
                    <code>md</code>
                    {' '}
                    identifier
                </li>
                <li>
                    Large devices (large desktops and up): from 1200px screen width and up,
                    <code>lg</code>
                    {' '}
                    identifier
                </li>
            </ul>
        </section>

        <section className="info-section">
            <h2>Other options</h2>
            <p>
                For other grid options (responsive resets, gutter removal, column offset, nesting, ordering, etc.) please see
                <a href="https://getbootstrap.com/docs/3.4/css/#grid" target="_blank" rel="noopener noreferrer">Bootstrap v3 grid docs</a>
            </p>
        </section>
    </div>
);
