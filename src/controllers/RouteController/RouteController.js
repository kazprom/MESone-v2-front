import React from 'react';
import {Redirect, Route} from "react-router-dom";

export default function RouteController({location,url='',name,parent=null,breadcrumbs=[],isAuth,isAdmin,isRoot,title}){
    let file = require(`../../routes/${name}/routes.js`);

    let src=file.default;
    let thisBreadcrumbs = [];
    let links = [];
    let routes = [];
    let redirects = [];

    src.map((route) => {
        let returnBool = false;
        if(route.private === true){
            if(isRoot === true && route.root === true){
                returnBool = true;
            }else{
                if(isAdmin === true && route.forAdmin === true){
                    returnBool = true;
                }
            }
        }else{
            returnBool = true;
        }

        if(returnBool === true){
            if(location.pathname===url+route.path){
                title.current=route.name;
            }
            if(parent!==null){
                //thisBreadcrumbs=[...breadcrumbs,{name:route.name}];
            }
            if(route.link === true){
                links.push({...route,path:url+route.path,parent});
            }
            routes.push(
                <Route
                    key={url+route.path}
                    exact={route.exact}
                    path={url+route.path}
                    //component={route.component}
                    render={()=>{
                        return (
                            <route.component title={route.name} url={url+route.path}/>
                        )
                    }}
                />
            )
            let recursiveLoad={links:[],routes:[]};
            if(route?.children){
                recursiveLoad=RouteController({
                    location,
                    url:route.path,
                    name:route?.children,
                    parent:route,
                    breadcrumbs:thisBreadcrumbs,
                    isAuth,isAdmin,isRoot,title
                })
            }
            links=[...links,...recursiveLoad.links];
            routes=[...routes,...recursiveLoad.routes];
            if(recursiveLoad?.title?.length>0){
                //title=recursiveLoad?.title;
                //title.current=[...title.current,...recursiveLoad?.title.current];
            }
            //thisBreadcrumbs=[...recursiveLoad.breadcrumbs];
        }
    })

    {isAuth === true?
        isRoot === true?
            redirects.push(<Redirect key={"/installer"} to={'/installer'}/>)
            :
            redirects.push(<Redirect key={"/logout"} to={'/logout'}/>)
        :
        redirects.push(<Redirect key={"/login"} to={'/login'}/>)
    }

    return {links:links,routes:routes,redirects:redirects,breadcrumbs:thisBreadcrumbs,title};
}
