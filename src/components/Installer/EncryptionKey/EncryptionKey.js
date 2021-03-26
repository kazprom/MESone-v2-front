import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    TextField
} from "@material-ui/core";
import {ContentFrame} from "../../../ui";
import {useLang} from "../../../lang";
import {installerGetEnv, installerRegenKeys} from "../../../requests/installer";
import * as actions from "../../../store/auth/actions";
import {useDispatch} from "react-redux";
import * as appActions from "../../../store/app/actions";

let initialState = {
    'APP_KEY':'',
    'JWT_SECRET':'',
}

export default function (props){
    let lang=useLang('ru_RU');
    let [state,setState] = useState({
        data: initialState,
        isChange:false,
        isLoading:true
    });
    let [update,setUpdate] = useState(true);

    let dispatch=useDispatch();
    let authSignOut = (payload) => dispatch(actions.authSignOut(payload));
    let messageShow = (payload) => dispatch(appActions.messageShow(payload));

    const setStateHandler = (value) => {
        setState(prev=>({...prev,...value}));
    }
    useEffect(()=>{
        if(update===true){
            setStateHandler({isLoading: true});
            installerGetEnv(Object.keys(state.data)).then(response=>{
                setStateHandler({data:JSON.parse(response),isLoading: false});
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
                                    disabled={true}
                                    value={state.data['APP_KEY']}
                                    size={"small"}
                                    label={lang('App key')}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    disabled={true}
                                    value={state.data['JWT_SECRET']}
                                    size={"small"}
                                    label={lang('Jwt key')}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                        installerRegenKeys().then(response=>{
                                            if(!response?.error && response){
                                                messageShow({
                                                    severity:"success",
                                                    title:lang('Keys regenerated successful'),
                                                    message:lang('Keys regenerated successful'),
                                                })
                                            }else{
                                                messageShow({
                                                    severity:"warning",
                                                    title:lang('Keys regenerated unsuccessful'),
                                                    message:response?.error,
                                                    lifeTime:10000
                                                })
                                            }
                                        });
                                        authSignOut();
                                    }}
                                    size={"small"}
                                >
                                    {lang('Create new')}
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Box>
        </ContentFrame>
    )
}
