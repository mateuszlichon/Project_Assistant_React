import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

const layout = (props) => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}>
                {props.navigation}
            </Col>
            <Col xs={6} md={4}>
                {props.children}
            </Col>
        </Row>
    </Grid>
    // <div className="row">
    //     <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 bg-info">
    //         {props.navigation}
    //     </div>
    //     <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">
    //         {props.children}
    //     </div>
    // </div>
);

export default layout;