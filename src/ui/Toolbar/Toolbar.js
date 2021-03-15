import React from "react";
import Grid from "@material-ui/core/Grid";

export default ({left,center,right,style})=>{
    return(
        <Grid
            container
            direction={"row"}
            spacing={0}
            style={style}
        >
            <Grid item>{left}</Grid>
            <Grid item style={{display:"flex", alignItems:"center", flex:1,textAlign:"center"}}>
                {center}
            </Grid>
            <Grid item style={{display:"flex", alignItems:"center", textAlign:"center"}}>{right}</Grid>
        </Grid>
    )
}
