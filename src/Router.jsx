import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import {Route, Switch, Redirect, useParams, useLocation} from 'react-router-dom';
import { LoginForm } from './components/Auth';
import Installer from './components/Installer/Installer';
import Dashboard from './components/Dashboard/Dashboard';
import RefreshToken from './components/Auth/RefreshToken/RefreshToken';
import * as authSelector from "./store/auth/selectors";

import PageNotFound from "./components/PageNotFound/PageNotFound";

export default function Router(props) {
    let user=useSelector(authSelector.user);
    let isAuth=useSelector(authSelector.isAuth);
    let routeLocation = useLocation();

    //console.log (routes);

    return (
        <Fragment>
            <Switch>
                {/*{routes.map((route,routeIndex)=>{
                    return(
                        <Route
                            key={routeIndex}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    )
                })}*/}
                {isAuth === true?
                    <Fragment>
                        {user?.id === '0'?
                            <Route path="/installer" render={({match})=>{
                                return <Installer match={match} title={"Установщик"}/>;
                            }}
                            />
                            :
                            <Route exact path="/" component={Dashboard}/>
                        }
                    </Fragment>
                    :
                    <Route exact path="/login" component={LoginForm}/>
                }
                <Route exact path="*" component={PageNotFound}/>
            </Switch>
            {isAuth === true?
                user?.id === '0'?
                    <Redirect to={'/installer'}/>
                    :
                    <Redirect to={'/'}/>
                :
                <Redirect to={'/login'}/>
            }
            <RefreshToken/>
        </Fragment>
    )
}
