import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    headerWrapper:{
        display:"flex",
        minHeight: "50px",
        flex: "none",
        padding: 0,
        backgroundColor: "#FFF",
        borderBottom: "1px solid #DDD",
    },
    headerTitle:{
        display:"flex",
        flex: 1,
        textAlign:"left",
    },
    headerTitleText:{
        fontSize:"1.2em",
        fontWeight:"bold",
    },
}));
