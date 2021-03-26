import React, {Fragment, useEffect} from "react";
import {Switch, useLocation} from "react-router-dom";
import {RouteController} from "../index";
import RefreshToken from "../../components/Auth/RefreshToken/RefreshToken";
import {Grid} from "@material-ui/core";
import {Content, Header, Sidebar} from "../../ui";
import {version} from "../../../package.json";
import {LogOutForm} from "../../components/Auth";
import {useStyles} from "../../components/App/AppStyle";
import {useDispatch, useSelector} from "react-redux";
import * as appSelector from "../../store/app/selectors";
import * as authSelector from "../../store/auth/selectors";

export default function AppController({url='',name,title}){
    let location = useLocation();
    let style=useStyles();
    let appName = useSelector (appSelector.getName);

    let isAuth=useSelector(authSelector.isAuth);
    let isAdmin=useSelector(authSelector.isAdmin);
    let isRoot=useSelector(authSelector.isRoot);


    let routeController = RouteController({
        location,url,name,isAuth,isAdmin,isRoot,title
    });

    //console.log (routeController);

    return(
        isAuth?
            <Grid container direction={"row"} className={style.appWrapper}>
                <Grid item className={style.appSidebar}>
                    <Sidebar
                        header={<div>{appName}</div>}
                        footer={<div>версия {version}</div>}
                        links={routeController.links}
                    />
                </Grid>
                <Grid item className={style.appContainer}>
                    <Header title={title.current} children={<LogOutForm/>}/>
                    <Content children={
                        <Fragment>
                            <Switch>
                                {routeController.routes}
                            </Switch>
                            {routeController.redirects}
                            <RefreshToken/>
                        </Fragment>
                    }/>
                </Grid>
            </Grid>
            :
            <Fragment>
                <Switch>
                    {routeController.routes}
                </Switch>
                {routeController.redirects}
            </Fragment>
    )
}
