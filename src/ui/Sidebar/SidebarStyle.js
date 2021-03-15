import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    sidebarWrapper:{
        height: "100%",
        backgroundColor:"#30426a",
    },
    sidebarHeader:{
        minHeight:"50px",
        fontSize:'1.2em',
        color:"#FFF",
        borderRight:"1px solid #000",
        backgroundColor:"#2c3b5c",
    },
    sidebarContainer:{
        fontSize:'1em',
        color:"#FFF",
        height: "100%",
        flex: 1,
    },
    sidebarFooter:{
        fontSize:'.8em',
        color:"#FFF",
        height: "25px",
    },
}));
