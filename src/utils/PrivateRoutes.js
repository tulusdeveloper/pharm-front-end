import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthHandler from "./AuthHandler";



export var PrivateRoutes = ({ component: Component, ...rest }) => {
    console.log({...rest});
    console.log(rest);
    return (
        <Outlet
        {...rest}
        render={(props) =>
            AuthHandler.loggedIn() ? <Component {...props} /> : <Navigate to='/' />}
    />
    );
        };







