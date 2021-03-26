import React, {Fragment, useEffect, useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, Grid, LinearProgress, TextField} from "@material-ui/core";
import {ContentFrame} from "../../../ui";
import {useLang} from "../../../lang";
import {
    databaseGetAvailableDrivers,
    installerCheckDbConnection,
    installerGetEnv,
    installerSetEnv
} from "../../../requests/installer";
import {useDispatch} from "react-redux";
import * as actions from "../../../store/app/actions";
import Dropdown from "../../../ui/Dropdown/Dropdown";

let initialState = {
    'DB_CONNECTION':'',
    'DB_HOST':'localhost',
    'DB_USERNAME':'',
    'DB_PASSWORD':'',
    'DB_PORT':'',
    'DB_DATABASE':'',
}

export default function (props){
    let lang=useLang('ru_RU');
    let [state,setState] = useState({data: initialState, isChange:false, isLoading:true});
    let [drivers,setDrivers] = useState([]);
    let [update,setUpdate] = useState(true);

    let dispatch=useDispatch();
    let messageShow = (payload) => dispatch(actions.messageShow(payload));

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
            databaseGetAvailableDrivers().then((response)=>{
                setDrivers(response);
            });
            setUpdate(false);
        }
    },[update]);

    return(
        <ContentFrame isLoading={state.isLoading}>
            <Box p={1}>
                <Card>
                    <CardActions>
                        <Grid container direction={"row"} spacing={1}>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                    }}
                                    size={"small"}
                                >
                                    {lang('Create')}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                    }}
                                    size={"small"}
                                >
                                    {lang('Formatting')}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                    }}
                                    size={"small"}
                                >
                                    {lang('Clear')}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                    }}
                                    size={"small"}
                                >
                                    {lang('Download')}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                    }}
                                    size={"small"}
                                >
                                    {lang('Upload')}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    color={"secondary"}
                                    onClick={()=>{
                                    }}
                                    size={"small"}
                                >
                                    {lang('Delete')}
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Box>
            <Box p={1}>
                <Card>
                    <CardContent>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                {/*<Dropdown
                                    options={drivers}
                                />*/}
                            </Grid>
                            <Grid item>
                                <TextField
                                    value={state.data['DB_CONNECTION']}
                                    size={"small"}
                                    label={lang('Drivers')}
                                    variant="outlined"
                                    name={'DB_CONNECTION'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    value={state.data['DB_HOST']}
                                    size={"small"}
                                    label={lang('Host')}
                                    variant="outlined"
                                    name={'DB_HOST'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type={"number"}
                                    value={state.data['DB_PORT']}
                                    size={"small"}
                                    label={lang('Port')}
                                    variant="outlined"
                                    name={'DB_PORT'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    value={state.data['DB_DATABASE']}
                                    size={"small"}
                                    label={lang('Database')}
                                    variant="outlined"
                                    name={'DB_DATABASE'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    value={state.data['DB_USERNAME']}
                                    size={"small"}
                                    label={lang('Username')}
                                    variant="outlined"
                                    name={'DB_USERNAME'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type={"password"}
                                    value={state.data['DB_PASSWORD']}
                                    size={"small"}
                                    label={lang('Password')}
                                    variant="outlined"
                                    name={'DB_PASSWORD'}
                                    onChange={onChangeHandler}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container direction={"row"} spacing={1}>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                        installerSetEnv(JSON.stringify(state.data)).then((response)=>{});
                                    }}
                                    size={"small"}
                                    disabled={!state.isChange}
                                >
                                    {lang('Save')}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={()=>{
                                        installerCheckDbConnection().then(response=>{
                                            if(!response?.error && response){
                                                messageShow({
                                                    severity:"success",
                                                    title:lang('Connection successful'),
                                                    message:lang('Connection successful'),
                                                })
                                            }else{
                                                messageShow({
                                                    severity:"warning",
                                                    title:lang('Connection unsuccessful'),
                                                    message:response?.error,
                                                    lifeTime:10000
                                                })
                                            }
                                        })
                                    }}
                                    size={"small"}
                                >
                                    {lang('Test DB connection')}
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Box>
        </ContentFrame>
    )
}
