import { lazy } from "react";

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ functions ~~~ */

const functions = [
    {
        back:false,
        link:true,
        exact:false,
        name:'Functions',
        path: "/functions",
        private:true,
        root:false,
        forAdmin: false,
        component: lazy(props =>
            import(
                /* webpackChunkName: "Installer" */
                /* webpackMode: "lazy" */
                "../../components/Installer/Installer"
                )
        )
    },
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ settings ~~~ */

const settings = [
    {
        back:false,
        link:true,
        exact:false,
        name:'Settings',
        path: "/settings",
        private:true,
        root:false,
        forAdmin: true,
        component: lazy(props =>
            import(
                /* webpackChunkName: "Installer" */
                /* webpackMode: "lazy" */
                "../../components/Installer/Installer"
                )
        )
    },
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ noMatch ~~~ */

const noMatch = {
    back:false,
    link:false,
    exact:false,
    name:'404',
    path: "*",
    private:false,
    root:false,
    forAdmin: false,
    component: lazy(props =>
        import(
            /* webpackChunkName: "no-match" */
            /* webpackMode: "lazy" */
            "../../components/PageNotFound/PageNotFound"
            )
    )
};

const routes = [
    {
        back:false,
        link:false,
        exact:false,
        name:'Logout',
        path: "/logout",
        private:false,
        root:false,
        forAdmin: false,
        component: lazy(props =>
            import(
                /* webpackChunkName: "LogOutForm" */
                /* webpackMode: "lazy" */
                "../../components/Auth/LogOutForm/LogOutForm"
                )
        )
    },
    {
        back:false,
        link:false,
        exact:false,
        name:'Login',
        path: "/login",
        private:false,
        root:false,
        forAdmin: false,
        component: lazy(props =>
            import(
                /* webpackChunkName: "LoginForm" */
                /* webpackMode: "lazy" */
                "../../components/Auth/LoginForm/LoginForm"
                )
        )
    },
    {
        back:false,
        link:true,
        exact:true,
        name:'Installer',
        path: "/installer",
        private:true,
        root:true,
        forAdmin: false,
        component: lazy(props =>
            import(
                /* webpackChunkName: "LoginForm" */
                /* webpackMode: "lazy" */
                "../../components/Installer/Installer"
                )
        ),
        children:"Installer",
    },
    ...functions,
    ...settings,
    noMatch
]

export default routes;
