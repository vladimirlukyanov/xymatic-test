import React, {useEffect} from 'react';
import {Row, Col, Card, CardBody} from "reactstrap";
import {connect} from "react-redux";
import {changeLayoutWidth, changeSidebarTheme, changeSidebarType, changeTopbarTheme} from "../../store/layout/actions";
import {withRouter} from "react-router-dom";

import {
    getBitcoinPrice
} from "../../store/bitcoin/actions";

const MiniWidget = (props) => {
    console.log(props);

    useEffect(() => {
        props.getBitcoinPrice();
    }, []);

    return (
        <React.Fragment>
            <Col sm="4">
                <Card>
                    <CardBody>
                        <p className="text-muted mb-4">
                            <i className=" mdi mdi-bitcoin h2 text-warning align-middle mb-0 mr-3"></i>
                            Bitcoin
                        </p>

                        <Row>
                            <Col xs="6">
                                <div>
                                    <h5>444</h5>
                                    <p className="text-muted text-truncate mb-0">+1
                                        <i className="mdi mdi-arrow-up ml-1 text-success"></i>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="4">
                <Card>
                    <CardBody>
                        <p className="text-muted mb-4">
                            <i className=" mdi mdi-ethereum h2 text-primary align-middle mb-0 mr-3"></i>
                            Ethereum
                        </p>

                        <Row>
                            <Col xs="6">
                                <div>
                                    <h5>444</h5>
                                    <p className="text-muted text-truncate mb-0">+1
                                        <i className="mdi mdi-arrow-up ml-1 text-success"></i>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="4">
                <Card>
                    <CardBody>
                        <p className="text-muted mb-4">
                            <i className=" mdi mdi-litecoin h2 text-info align-middle mb-0 mr-3"></i>
                            LiteCoin
                        </p>

                        <Row>
                            <Col xs="6">
                                <div>
                                    <h5>444</h5>
                                    <p className="text-muted text-truncate mb-0">+1
                                        <i className="mdi mdi-arrow-up ml-1 text-success"></i>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

        </React.Fragment>
    );
}

const mapStatetoProps = state => {
    return {
        ...state
    };
};

export default connect(mapStatetoProps, {
    getBitcoinPrice
})(MiniWidget);
