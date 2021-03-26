import {Grid, List, ListItem, ListItemText} from "@material-ui/core";
import {useStyles} from "./SidebarStyle";
import {Link} from "react-router-dom";
import React from "react";
import {useLang} from "../../lang";

export default ({url,header,footer,links})=>{
    let style=useStyles();
    let langPack=useLang();
    return(
        <Grid container direction={"column"} className={style.sidebarWrapper}>
            <Grid item className={style.sidebarHeader}>
                {header||"SB header"}
            </Grid>
            <Grid item className={style.sidebarContainer}>
                <List dense>
                    {links?.map((link)=>{
                        return(
                            <Link key={link.path} to={link.path} className={style.sidebarHref}>
                                <ListItem
                                    button
                                >
                                    <ListItemText primary={langPack(link.name)}/>
                                </ListItem>
                            </Link>
                        )
                    })}
                </List>
            </Grid>
            <Grid item className={style.sidebarFooter}>
                {footer||"SB footer"}
            </Grid>
        </Grid>
    )
}
