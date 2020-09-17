import React, {Component, useState, useEffect} from 'react';
import {Col, Card, CardBody, Button} from "reactstrap";

import {ResponsiveLineCanvas} from '@nivo/line'
import {connect} from "react-redux";
import {
    getBitcoinPriceMonth,
    getBitcoinPriceSixMonth,
    getBitcoinPriceYear,
    getBitcoinPriceAll
} from "../../store/bitcoin/actions";
import classNames from "classnames";

const OverView = (props) => {
    const [nav, setNav] = useState('month');

    useEffect(() => {
            if (nav === 'month') {
                props.getBitcoinPriceMonth();
            } else if (nav === '6month') {
                props.getBitcoinPriceSixMonth();
            } else if (nav === 'year') {
                props.getBitcoinPriceYear();
            } else {
                props.getBitcoinPriceAll();
            }
        },
        [nav]
    );

    return (
        <React.Fragment>
            <Col xl="12">
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-3">Overview</h4>
                        <div>
                            <div id="overview-chart" className="apex-charts" dir="ltr">
                                <div className="toolbar button-items text-center">
                                    <Button color="light" size="sm" type="button"
                                            className={nav === 'month' ? "active" : ""}
                                            onClick={() => setNav('month')} id="one_month"
                                    >
                                        1M
                                    </Button>
                                    <Button color="light" size="sm" type="button"
                                            className={nav === '6month' ? "active" : ""}
                                            onClick={() => setNav('6month')} id="six_month"
                                    >
                                        6M
                                    </Button>
                                    <Button color="light" size="sm" type="button"
                                            className={nav === 'year' ? "active" : ""}
                                            onClick={() => setNav('year')} id="year"
                                    >
                                        1Y
                                    </Button>
                                    <Button color="light" size="sm" type="button"
                                            className={nav === 'all' ? "active" : ""}
                                            onClick={() => setNav('all')} id="all"
                                    >
                                        ALL
                                    </Button>
                                </div>
                                <div id="overview-chart-timeline" style={{height: "25em", width: "100%"}}>
                                    {props.overView.graph ?
                                        <ResponsiveLineCanvas
                                            data={
                                                [
                                                    {
                                                        "id": "Bitcoin price",
                                                        "color": "hsl(203,63%,49%)",
                                                        "data": props.overView.graph
                                                    },
                                                ]}

                                            margin={{top: 50, right: 30, bottom: 50, left: 50}}
                                            xScale={{
                                                type: 'time',
                                                format: '%Y-%m-%d',
                                                useUTC: false,
                                                precision: 'day',
                                            }}
                                            labelFormat=".0s"
                                            xFormat="time:%Y-%m-%d"
                                            yScale={{
                                                type: 'linear',
                                            }}
                                            axisLeft={{
                                                format: v => `$${v}`,
                                                legendOffset: 12,
                                            }}
                                            axisBottom={{
                                                format: nav === 'all' ? '%b %Y' : nav === 'month' ? '%d %b' : '%d %b %Y',
                                                legendOffset: -12,
                                            }}
                                            defs={[
                                                {
                                                    id: 'gradientC',
                                                    type: 'linearGradient',
                                                    colors: [
                                                        {offset: 0, color: '#33dbe0'},
                                                        {offset: 100, color: '#3ec8bd'},
                                                    ],
                                                },
                                            ]}
                                            curve="monotoneX"
                                            axisTop={null}
                                            animate={true}
                                            enableGridX={true}
                                            enableArea={true}
                                            isInteractive={true}
                                            areaOpacity={0.1}
                                            colors={['#4098e6']}
                                            lineWidth={1}
                                            pointSize={nav === 'all' ? 1 : 3}
                                            pointColor={{theme: 'background'}}
                                            pointBorderWidth={1}
                                            pointBorderColor={{from: 'serieColor'}}
                                            enablePointLabel={true}
                                            pointLabel="y"
                                            pointLabelYOffset={-12}
                                            useMesh={true}
                                            fill={[
                                                {match: '*', id: 'gradientC'},
                                            ]}
                                            tooltip={(data, t) => {

                                                return (
                                                    <div
                                                        style={{backgroundColor: 'white', borderRadius: 3, padding: "10px", boxShadow: '0 8px 6px -6px rgba(0,0,0,0.5)'}}>
                                                        Price :
                                                        <span style={{
                                                            color: '#000000',
                                                            display: 'block',
                                                            fontSize: '18px'
                                                        }}>${data.point.data.y}</span>
                                                        <span style={{
                                                            color: '#cccccc',
                                                            display: 'block'
                                                        }}>{data.point.data.xFormatted}</span>
                                                    </div>)
                                            }}
                                        />
                                        : "Loading..."}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}


const mapStatetoProps = state => {
    return state;
};

export default connect(mapStatetoProps, {
    getBitcoinPriceMonth,
    getBitcoinPriceSixMonth,
    getBitcoinPriceYear,
    getBitcoinPriceAll
})(OverView);