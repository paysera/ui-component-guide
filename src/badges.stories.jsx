import React from 'react';
import { Badge, Button } from 'react-bootstrap';

export default { title: 'Badges' };

export const Badges = () => (
    <div>
        <h2>Used for highlighting pending data</h2>
        <p>
            <Badge>42</Badge>
        </p>
        <p>
            <Button>Messages <Badge>42</Badge></Button>
        </p>
    </div>
);
