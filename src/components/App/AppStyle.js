import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    appWrapper:{
        height: "100vh",
        flex: 1,
    },
    appSidebar:{
        height:"100vh",
        width: "250px",
    },
    appContainer:{
        overflow:"auto",
        height:"100vh",
        width: "100%",
        flex: 1,
    },
    appHref:{
        textDecoration:"none",
        color:"inherit"
    },
}));
