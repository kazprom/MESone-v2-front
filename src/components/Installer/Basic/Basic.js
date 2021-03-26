import React, {Fragment, useEffect, useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    LinearProgress,
    TextField
} from "@material-ui/core";
import {ContentFrame} from "../../../ui";
import {useLang} from "../../../lang";
import {useDispatch} from "react-redux";
import {installerGetEnv, installerSetEnv} from "../../../requests/installer";
import * as authActions from "../../../store/auth/actions";
import * as appActions from "../../../store/app/actions";

let initialState = {
    'INSTALLER_LOGIN':'',
    'INSTALLER_PASSWORD':''
}

export default function Basic(props){
    let lang=useLang('ru_RU');
    let [state,setState] = useState({data: initialState, isChange:false, isLoading:true});
    let [update,setUpdate] = useState(true);

    let dispatch=useDispatch();
    let authSignOut = (payload) => dispatch(authActions.authSignOut(payload));
    let messageShow = (payload) => dispatch(appActions.messageShow(payload));

    const setStateHandler = (value) => {
        setState(prev=>({...prev,...value}));
    }

    const onChangeHandler = (value) => {
        setState(prev=>({...prev,data: {...prev.data,[value.target.name]:value.target.value},isChange: true}));
    }

    useEffect(()=>{
        if(update===true){
            setStateHandler({isLoading: true, isChange:false});
            installerGetEnv(Object.keys(state.data)).then(response=>{
                setStateHandler({data:{...state.data,...JSON.parse(response)},isLoading: false});
            })
            setUpdate(false);
        }
    },[update]);

    return(
        <ContentFrame isLoading={state.isLoading}>
            <Box p={1}>
                <Card>
                    <CardContent>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <TextField
                                    value={state.data['INSTALLER_LOGIN']}
                                    size={"small"}
                                    label={lang('Username')}
                                    variant="outlined"
                                    name={'INSTALLER_LOGIN'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type={"password"}
                                    value={state.data['INSTALLER_PASSWORD']}
                                    size={"small"}
                                    label={lang('Password')}
                                    variant="outlined"
                                    name={'INSTALLER_PASSWORD'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                        installerSetEnv(JSON.stringify(state.data)).then((response)=>{
                                            if(!response?.error && response){
                                                messageShow({
                                                    severity:"success",
                                                    title:lang('Settings save'),
                                                    message:lang('Settings save'),
                                                })
                                            }else{
                                                messageShow({
                                                    severity:"warning",
                                                    title:lang('Error'),
                                                    message:response?.error,
                                                    lifeTime:10000
                                                })
                                            }
                                            authSignOut();
                                        });
                                    }}
                                    size={"small"}
                                    disabled={!state.isChange}
                                >
                                    {lang('Save')}
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Box>
        </ContentFrame>
    )
}
