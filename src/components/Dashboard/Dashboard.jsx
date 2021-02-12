import React from 'react';
import DashboardComponent from './DashboardComponent';
import langPack from '../../lang/ru/Dashboard.js'

function Dashboard() {
    return (<DashboardComponent
        langPack={langPack}
    />);
}

export default Dashboard;