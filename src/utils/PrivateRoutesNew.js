import { Outlet, Navigate } from "react-router-dom";
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent";

export var PrivateRoutesNew = ({ page, ...rest }) => {
const isLoggedIn = AuthHandler.loggedIn();

    return (
        <Outlet
            {...rest}
            render={() =>
                isLoggedIn ? <MainComponent page={page} /> : <Navigate to='/' />}
        />
    );
};