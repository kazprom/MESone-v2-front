import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
        </Switch>
    )
}

export default Routes;