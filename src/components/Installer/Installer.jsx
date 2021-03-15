import React from 'react';
import {Grid} from "@material-ui/core";
import {Content, Header, Sidebar} from "../../ui";
import {useStyles} from "./InstallerStyle";
import {LogOutForm} from "../Auth";

export default function Installer(props) {
    let style=useStyles();
    return (
        <Grid container direction={"row"} className={style.installerWrapper}>
            <Grid item className={style.installerSidebar}>
                <Sidebar/>
            </Grid>
            <Grid item className={style.installerContainer}>
                <Header children={<LogOutForm/>}/>
                <Content children={(
                    <div>Installer</div>
                )}/>
            </Grid>
        </Grid>);
}
