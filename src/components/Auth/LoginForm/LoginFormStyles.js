import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    loginContainer:{
        margin:"auto",
        flex:"none",
        padding:0,
        width:"auto",
        backgroundColor:"inherit",
    },
    loginLogo:{
        textAlign:"center",
    },
    loginForm:{
        margin:"auto",
        flex:"none",
        padding:0,
        border:"1px solid #CCC",
        width:"350px",
        backgroundColor:"#FFF",
    },
}));
