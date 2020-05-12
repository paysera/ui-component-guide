import React from 'react';
import { Pager, Pagination } from 'react-bootstrap';

export default { title: 'Pagination' };

let active = 7;
let items = [];
for (let number = 1; number <= 10; number++) {
    items.push(
        <Pagination.Item active={number === active}>{number}</Pagination.Item>
    );
}

export const Pagers = () => (
    <div>
        <h2>Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.</h2>

        <p>Centered by default</p>
        <Pager>
            <Pager.Item href="#">Previous</Pager.Item>{' '}
            <Pager.Item href="#">Next</Pager.Item>
        </Pager>

        <h2>Aligned</h2>
        <Pager>
            <Pager.Item previous href="#">
                &larr; Previous Page
            </Pager.Item>
            <Pager.Item next href="#">
                Next Page &rarr;
            </Pager.Item>
        </Pager>

        <h2>Disabled</h2>
        <Pager>
            <Pager.Item previous href="#">
                &larr; Previous
            </Pager.Item>
            <Pager.Item disabled next href="#">
                Next &rarr;
            </Pager.Item>
        </Pager>

        <h2>Available sizing</h2>
        <div>
            <Pagination bsSize="large">{items}</Pagination>
            <br />

            <Pagination bsSize="medium">{items}</Pagination>
            <br />

            <Pagination bsSize="small">{items}</Pagination>
        </div>

        <h2>More complex example with ellipsis</h2>
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    </div>
);
