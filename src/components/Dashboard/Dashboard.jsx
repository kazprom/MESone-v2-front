import React from 'react';
import {useDispatch} from 'react-redux';
import DashboardComponent from './DashboardComponent';
import langPack from '../../lang/ru_RU/Dashboard.js'
import * as actions from "../../store/auth/actions";

export default function Dashboard(props) {
    let dispatch=useDispatch();
    let authSignOut=()=>dispatch(actions.authSignOut());
    return (<DashboardComponent
        langPack={langPack}
        onClick={authSignOut}
    />);
}
