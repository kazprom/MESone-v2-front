import {Grid} from "@material-ui/core";
import {useStyles} from "./SidebarStyle";

export default ()=>{
    let style=useStyles();
    return(
        <Grid container direction={"column"} className={style.sidebarWrapper}>
            <Grid item className={style.sidebarHeader}>
                SB header
            </Grid>
            <Grid item className={style.sidebarContainer}>
                SB container
            </Grid>
            <Grid item className={style.sidebarFooter}>
                SB footer
            </Grid>
        </Grid>
    )
}
