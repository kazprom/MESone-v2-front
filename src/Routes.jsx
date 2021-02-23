import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { isAuth, user } from './store/auth/selectors';
import { LoginForm } from './components/Auth';
import Installer from './components/Installer/Installer';
import Dashboard from './components/Dashboard/Dashboard';
import RefreshToken from './components/Auth/RefreshToken/RefreshToken';

function Routes(props) {
    if (props.isAuth === false) {
        return (<LoginForm/>);
    }

    if (props.user?.id === '0') {
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

function mapStateToProps(store) {
    return ({
        user: user(store),
        isAuth: isAuth(store),
    });
}

export default connect(mapStateToProps)(Routes);