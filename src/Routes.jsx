import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { LoginForm } from './components/Auth';
import Installer from './components/Installer/Installer';
import Dashboard from './components/Dashboard/Dashboard';
import RefreshToken from './components/Auth/RefreshToken/RefreshToken';
import * as authSelector from "./store/auth/selectors";
import {Content} from "./ui";

export default function Routes(props) {
    let user=useSelector(authSelector.user);
    let isAuth=useSelector(authSelector.isAuth);

    if (isAuth === false) {
        return (<LoginForm/>);
    }

    if (user?.id === '0') {
        return (
            <Fragment>
                <Installer/>
                <RefreshToken/>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
            </Switch>
            <RefreshToken/>
        </Fragment>
    )
}
