import React,{Fragment} from "react";
import {Box, LinearProgress, Avatar} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

export default function ({isLoading=false,isSkeleton=false,...props}){
    return (
        <Fragment>
            {isLoading===true?
                <Fragment>
                    <LinearProgress/>
                    {isSkeleton===true&&
                    <Skeleton variant="rect" width={"auto"} height={118}/>
                    }

                </Fragment>
                :
                props.children
            }
        </Fragment>
    )
}
