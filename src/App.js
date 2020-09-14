import React from 'react';

import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";

// Import Routes all
import {userRoutes, authRoutes} from "./routes";

// Import all middleware
import Authmiddleware from "./routes/middleware";

// layouts Format
import VerticalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

const App = (props) => {

    const NonAuthmiddleware = ({
                                   component: Component,
                                   layout: Layout
                               }) => (
        <Route
            render={props => {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                );
            }}
        />
    );

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {authRoutes.map((route, idx) => (
                        <NonAuthmiddleware
                            path={route.path}
                            layout={NonAuthLayout}
                            component={route.component}
                            key={idx}
                        />
                    ))}

                    {userRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            layout={VerticalLayout}
                            component={route.component}
                            key={idx}
                        />
                    ))}

                </Switch>
            </Router>
        </React.Fragment>

    );
}

const mapStateToProps = state => {
    return {
        layout: state.Layout
    };
};

export default connect(mapStateToProps, null)(App);