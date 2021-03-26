import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {Chip} from "@material-ui/core";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import * as authSelector from "../../../store/auth/selectors";
import * as actions from "../../../store/auth/actions";
import {Redirect} from "react-router-dom";

export default function LogOutForm(props){
    let isAuth=useSelector(authSelector.isAuth);
    let user=useSelector(authSelector.user);
    let dispatch=useDispatch();
    let authSignOut = (payload) => dispatch(actions.authSignOut(payload));

    if(isAuth!==false){
        return (
            <Chip
                icon={<FaceIcon />}
                label={user?.first_name||''}
                onDelete={authSignOut}
                deleteIcon={<ExitToAppIcon/>}
                variant="outlined"
            />
        )
    }
    return <Redirect to={'/login'}/>
}
