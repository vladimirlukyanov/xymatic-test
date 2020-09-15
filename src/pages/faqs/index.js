import React, {useState} from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Media,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from "reactstrap";
import classnames from 'classnames';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const PagesFaqs = (props) => {

    const [activeTab, setactiveTab] = useState("1");

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="FAQs"/>

                    <div className="checkout-tabs">
                        <Row>


                        </Row>
                    </div>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default PagesFaqs;