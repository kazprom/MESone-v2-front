import {Toolbar} from "../../index";
import {Grid} from "@material-ui/core";
import {useStyles} from "./HeaderStyle";

export default ({title,children})=>{
    let style=useStyles();
    return (
        <Grid container direction={"column"} className={style.headerWrapper}>
            <Grid item className={style.headerTitle}>
                <Toolbar
                    style={{
                        backgroundColor:"#FFF",
                        borderRadius:'2px',
                        padding:"5px",
                    }}
                    center={title||"Title"}
                    right={children}
                />
            </Grid>
        </Grid>
    );
}
