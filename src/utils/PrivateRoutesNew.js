import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent";



export var PrivateRoutesNew = ({ page, ...rest }) => {
    return (
        <Outlet
            {...rest}
            render={() =>
                AuthHandler.loggedIn() ? <MainComponent page={page} /> : <Navigate to='/' />}
        />
    );
};







