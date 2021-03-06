import React from "react";
import {Redirect} from "react-router-dom";

// Authentication related pages
import Login from "../pages/authentication/login";
import Logout from "../pages/authentication/logout";
import Register from "../pages/authentication/register";
import ForgetPwd from "../pages/authentication/forgetpassword";

// Dashboard
import Dashboard from "../pages/dashboard/index";
import FAQs from "../pages/faqs/index";
import UserProfile from "../pages/profile/index";

const userRoutes = [

    {path: "/dashboard", component: Dashboard},
    {path: "/profile", component: UserProfile},
    {path: "/faqs", component: FAQs},
    {path: "/", exact: true, component: () => <Redirect to={"/dashboard"}/>}
];

const authRoutes = [
    {path: "/logout", component: Logout},
    {path: "/login", component: Login},
    {path: "/forgot-password", component: ForgetPwd},
    {path: "/register", component: Register},
];

export {userRoutes, authRoutes};
