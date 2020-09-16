import React from 'react';
import {Container, Row, Col} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import CardWelcome from "./card-welcome";
import MiniWidget from "./mini-widget";
import OverView from "./overview";


const Dashboard = (props) => {
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
                                <MiniWidget />
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