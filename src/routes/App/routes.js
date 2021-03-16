import { lazy } from "react";
import langPack from "../../lang";


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ functions ~~~ */

const functions = [
    {
        path: "/functions",
        component: lazy(props =>
            import(
                /* webpackChunkName: "functionsController" */
                /* webpackMode: "lazy" */
                "../../controllers/FunctionsController/FunctionsController"
                )
        )
    },
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ settings ~~~ */

const settings = [
    {
        name:'',
        path: "/settings",
        forAdmin: true,
        component: lazy(props =>
            import(
                /* webpackChunkName: "settingsController" */
                /* webpackMode: "lazy" */
                "../../controllers/SettingsController/SettingsController"
                )
        )
    },
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ noMatch ~~~ */

const noMatch = {
    path: "*",
    component: lazy(props =>
        import(
            /* webpackChunkName: "no-match" */
            /* webpackMode: "lazy" */
            "../../components/PageNotFound/PageNotFound"
            )
    )
};

export default [...functions, ...settings, noMatch];
