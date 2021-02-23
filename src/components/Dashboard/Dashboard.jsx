import React from 'react';
import { connect } from 'react-redux';
import DashboardComponent from './DashboardComponent';
import langPack from '../../lang/ru/Dashboard.js'
import { authSignOut } from '../../store/auth/actions';

function Dashboard(props) {
    return (<DashboardComponent
        langPack={langPack}
        onClick={props.logout}
    />);
}

function mapDispatchToProps(dispatch) {
    return ({
        logout: () => dispatch(authSignOut()),
    });
}

export default connect(null, mapDispatchToProps)(Dashboard);