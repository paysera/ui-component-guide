import React from 'react';
import { Table } from 'react-bootstrap';

export default { title: 'Tables' };

const renderTable = (props) => (
    <Table {...props}>
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
);

export const Tables = () => (
    <div>
        <h2>Default</h2>
        {renderTable()}
        <h2>Striped</h2>
        {renderTable({striped: true})}
        <h2>Bordered</h2>
        {renderTable({bordered: true})}
        <h2>Condensed</h2>
        {renderTable({condensed: true})}
        <h2>With row hover</h2>
        {renderTable({hover: true})}
        <h2>Responsive on small devices</h2>
        {renderTable({responsive: true})}
        <h2>Contextual (active, success, info, warning, danger)</h2>
        <Table>
            <tbody>
            <tr className="active">
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
            <tr className="success">
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr className="info">
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr className="warning">
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr className="danger">
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </Table>
    </div>
);
