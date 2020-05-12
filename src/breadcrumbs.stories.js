import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default { title: 'Breadcrumbs' };

export const Breadcrumbs = () => (
<div>
    <h2>Indicate the current page's location within a navigational hierarchy.</h2>
    <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                    Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
</div>
);
