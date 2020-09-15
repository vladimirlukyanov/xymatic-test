import React from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


const Dashboard = (props) => {

          return (
             <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Dashboard" breadcrumbItem="Welcome" />
                        <Row>

                        </Row>  
                    </Container>
                </div>
            </React.Fragment>
          );
        }

export default Dashboard;