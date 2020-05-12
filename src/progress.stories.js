import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default { title: 'Progress' };

const now = 60;

export const Progress = () => (
    <div>
        <h2>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</h2>
        <div>
            <h2>Basic</h2>
            <ProgressBar now={60} />
        </div>
        <div>
            <h2>With label</h2>
            <ProgressBar now={now} label={`${now}%`} />
        </div>
        <div>
            <h2>Contextual alternatives</h2>
            <ProgressBar bsStyle="success" now={40} />
            <ProgressBar bsStyle="info" now={20} />
            <ProgressBar bsStyle="warning" now={60} />
            <ProgressBar bsStyle="danger" now={80} />
        </div>
        <div>
            <h2>Striped</h2>
            <ProgressBar striped bsStyle="success" now={40} />
            <ProgressBar striped bsStyle="info" now={20} />
            <ProgressBar striped bsStyle="warning" now={60} />
            <ProgressBar striped bsStyle="danger" now={80} />
        </div>
        <div>
            <h2>Animated</h2>
            <ProgressBar active now={45} />
        </div>
        <ProgressBar>
            <h2>Stacked</h2>
            <ProgressBar striped bsStyle="success" now={35} key={1} />
            <ProgressBar bsStyle="warning" now={20} key={2} />
            <ProgressBar active bsStyle="danger" now={10} key={3} />
        </ProgressBar>
    </div>
);
