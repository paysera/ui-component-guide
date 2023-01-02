import React from 'react';

const ExpanderComponent = ({ original: { details } }) => (
    <div className="expander-container">
        <div className="row">
            {details.map(({ payer, fee }) => (
                <div className="col-md-12">
                    <div className="detail-list">
                        <div className="detail-label">
                            <label className="control-label">
                                <strong>Payer:</strong>
                            </label>
                        </div>
                        <div className="detail-value">
                            <div className="form-control-static">{payer}</div>
                        </div>
                    </div>
                    <div className="detail-list" style={{ borderBottom: '1px solid #ddd' }}>
                        <div className="detail-label">
                            <label className="control-label">
                                <strong>Fee:</strong>
                            </label>
                        </div>
                        <div className="detail-value">
                            <div className="form-control-static">{fee}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ExpanderComponent;
