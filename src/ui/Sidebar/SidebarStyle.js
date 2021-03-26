import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    sidebarWrapper:{
        height:"100%",
        backgroundColor:"#30426a",
    },
    sidebarHeader:{
        display:"flex",
        alignItems:"center",
        paddingLeft:10,
        minHeight:"50px",
        fontSize:'1.2em',
        color:"#a3a3a3",
        borderRight:"1px solid #000",
        backgroundColor:"#2c3b5c",
    },
    sidebarContainer:{
        fontSize:'1em',
        color:"#FFF",
        height: "100%",
        flex: 1,
        overflow:"auto",
    },
    sidebarFooter:{
        backgroundColor:"#2c3b5c",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        paddingRight:10,
        fontSize:'.7em',
        color:"#FFF",
        height: "25px",
    },
    sidebarHref:{
        textDecoration:"none",
        color:"inherit"
    },
}));
