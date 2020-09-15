import React from 'react';
import {Container, Row, Col} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import CardWelcome from "./card-welcome";
import MiniWidget from "./mini-widget";
import OverView from "./overview";


const Dashboard = (props) => {
    const reports = [
        {title: "Bitcoin", icon: "mdi mdi-bitcoin", color: "warning", value: "$ 9134.39", desc: "+ 0.0012 ( 0.2 % )"},
        {title: "Ethereum", icon: "mdi mdi-ethereum", color: "primary", value: "$ 9134.39", desc: "- 4.102 ( 0.1 % )"},
        {title: "litecoin", icon: "mdi mdi-litecoin", color: "info", value: "$ 245.44", desc: "+ 1.792 ( 0.1 % )"},
    ];
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Welcome"/>
                    <Row>
                        <Col xl="12">
                            <CardWelcome/>
                            <Row>
                                <MiniWidget reports={reports}/>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <OverView/>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;