import React, {useEffect} from 'react';
import {Row, Col, Card, CardBody} from "reactstrap";
import {connect} from "react-redux";
import {changeLayoutWidth, changeSidebarTheme, changeSidebarType, changeTopbarTheme} from "../../store/layout/actions";
import {withRouter} from "react-router-dom";
import classNames from "classnames";


import {
    getBitcoinPrice,
    getEthereumPrice,
    getLitcoinPrice
} from "../../store/bitcoin/actions";
import miniWidget from "../../store/bitcoin/reducer";

const MiniWidget = (props) => {

    useEffect(() => {
        props.getBitcoinPrice();
        props.getEthereumPrice();
        props.getLitcoinPrice();

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
                                {props.miniWidget.bitcoin ?
                                    <div>
                                        <h5>$ {props.miniWidget.bitcoin.price_usd}</h5>
                                        <p className="text-muted text-truncate mb-0"> $ {props.miniWidget.bitcoin.percent_change_24h}
                                            <i className={classNames('mdi ml-1', {
                                                "mdi-arrow-up text-success": parseFloat(props.miniWidget.bitcoin.percent_change_24h) > 0,
                                                "mdi-arrow-down text-danger": parseFloat(props.miniWidget.bitcoin.percent_change_24h) < 0
                                            })}/>
                                        </p>
                                    </div>
                                    : "Loading..."}
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
                                {props.miniWidget.ethereum ?
                                    <div>
                                        <h5>$ {props.miniWidget.ethereum.price_usd}</h5>
                                        <p className="text-muted text-truncate mb-0"> $ {props.miniWidget.ethereum.percent_change_24h}
                                            <i className={classNames('mdi ml-1', {
                                                "mdi-arrow-up text-success": parseFloat(props.miniWidget.ethereum.percent_change_24h) > 0,
                                                "mdi-arrow-down text-danger": parseFloat(props.miniWidget.ethereum.percent_change_24h) < 0
                                            })}/>
                                        </p>
                                    </div>
                                    : "Loading..."}
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
                                {props.miniWidget.litcoin ?
                                    <div>
                                        <h5>$ {props.miniWidget.litcoin.price_usd}</h5>
                                        <p className="text-muted text-truncate mb-0"> $ {props.miniWidget.litcoin.percent_change_24h}
                                            <i className={classNames('mdi ml-1', {
                                                "mdi-arrow-up text-success": parseFloat(props.miniWidget.litcoin.percent_change_24h) > 0,
                                                "mdi-arrow-down text-danger": parseFloat(props.miniWidget.litcoin.percent_change_24h) < 0
                                            })}/>
                                        </p>
                                    </div>
                                    : "Loading..."}
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

        </React.Fragment>
    );
}

const mapStatetoProps = state => {
    return state;
};

export default connect(mapStatetoProps, {
    getBitcoinPrice,
    getEthereumPrice,
    getLitcoinPrice
})(MiniWidget);
