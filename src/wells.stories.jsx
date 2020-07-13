import React from 'react';
import { Well } from 'react-bootstrap';

export default { title: 'Wells' };

export const Wells = () => (
    <div>
        <h2>Use the well an element to give it an inset effect.</h2>

        <div>
            <Well bsSize="large">Look I'm in a large well!</Well>
            <Well>Look I'm in a default size well!</Well>
            <Well bsSize="small">Look I'm in a small well!</Well>
        </div>
    </div>
);
