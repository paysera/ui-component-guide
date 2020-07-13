import React from 'react';
import ReactTable from 'react-table';

import data from './Data/fieldData';
import columns from './Data/columns';

export const renderAndesTable = () => (
    <ReactTable
        data={data}
        columns={columns}
        minRows={0}
        SubComponent={() => (
            <div className="expander-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="detail-list">
                            <div className="detail-label">
                                <label className="control-label">
                                    <strong>Payer:</strong>
                                </label>
                            </div>
                            <div className="detail-value">
                                <div className="form-control-static">
                                    John Zoe [EVP99999999999]
                                </div>
                            </div>
                        </div>
                        <div className="detail-list">
                            <div className="detail-label">
                                <label className="control-label">
                                    <strong>Fee:</strong>
                                </label>
                            </div>
                            <div className="detail-value">
                                <div className="form-control-static">
                                    0.00 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="detail-list">
                            <div className="detail-label">
                                <label className="control-label">
                                    <strong>Payer:</strong>
                                </label>
                            </div>
                            <div className="detail-value">
                                <div className="form-control-static">
                                    John Noe [EVP99999999999]
                                </div>
                            </div>
                        </div>
                        <div className="detail-list">
                            <div className="detail-label">
                                <label className="control-label">
                                    <strong>Fee:</strong>
                                </label>
                            </div>
                            <div className="detail-value">
                                <div className="form-control-static">
                                    3.50 EUR
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        showPagination={false}
        sortable={false}
        resizable={false}
        className="andes-table"
    />
);
