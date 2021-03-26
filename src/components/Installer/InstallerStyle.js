import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    installerWrapper:{
        height: "100vh",
        overflow:"auto",
    },
    installerSidebar:{
        height:"100vh",
        width: "250px",
    },
    installerContainer:{
        overflow:"auto",
        height:"100vh",
        width: "100%",
        flex: 1,
    },
    installerHref:{
        textDecoration:"none",
        color:"inherit"
    },
}));
