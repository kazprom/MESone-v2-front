import {Toolbar} from "../../index";
import {Grid} from "@material-ui/core";
import {useStyles} from "./HeaderStyle";
import {useLang} from "../../../lang";

export default ({title='',children})=>{
    let style=useStyles();
    let langPack=useLang();
    return (
        <Grid container direction={"column"} className={style.headerWrapper}>
            <Grid item className={style.headerTitle}>
                <Toolbar
                    style={{
                        backgroundColor:"#FFF",
                        borderRadius:'2px',
                        padding:"5px",
                    }}
                    center={<div className={style.headerTitleText}>{langPack(title||"Title")}</div>}
                    right={children}
                />
            </Grid>
        </Grid>
    );
}
