import React, {Fragment} from 'react';
import { useStyles } from './LoginFormStyles';
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoImage from "../../../No-logo.svg";
import { ButtonLoader } from '../../../ui';

function LoginFormComponent({langPack, fields, changeField,signIn,isLoading, ...props }) {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container direction={"column"} spacing={1} className={classes.loginContainer}>
                <Grid item className={classes.loginLogo}>
                    <img src={LogoImage}/>
                </Grid>
                <Grid item className={classes.loginForm}>
                    <Box p={1}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <TextField
                                    size={"small"}
                                    fullWidth
                                    variant="outlined"
                                    name="login"
                                    label={langPack('Login')}
                                    value={fields.login}
                                    onChange={changeField}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon color={"primary"}/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    size={"small"}
                                    type='password'
                                    name='password'
                                    label={langPack('Password')}
                                    value={fields.password}
                                    onChange={changeField}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon color={"primary"}/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                {(props.domains.length > 1) &&
                                <FormControl fullWidth variant='outlined'>
                                    <InputLabel id='type-auth-label' children={langPack.typeAuth}/>
                                    <Select
                                        id='type-auth'
                                        labelId='type-auth-label'
                                        name='domain_id'
                                        label={langPack.typeAuth}
                                        value={props.selectedDomain}
                                        onChange={changeField}
                                        disabled={props.disableCheckbox}
                                        children={props.domains.map(item => (
                                            <MenuItem key={`type-auth-item-${item.id}`} value={item.id} children={item.name}/>
                                        ))}
                                    />
                                </FormControl>
                                }
                            </Grid>
                            <Grid item>
                                <Grid container direction={"row"} spacing={1}>
                                    <Grid item xs={7}>
                                        <FormControlLabel
                                            control={<Checkbox
                                                color={"primary"}
                                                name='remember'
                                                checked={fields.remember}
                                                onChange={changeField}
                                                disabled={props.disableCheckbox}
                                            />}
                                            label={langPack('Remember')}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <ButtonLoader
                                            label={langPack('Enter')}
                                            variant={"outlined"}
                                            startIcon={<ExitToAppIcon color={"primary"}/>}
                                            style={{width:"100%"}}
                                            className={classes.button}
                                            type='submit'
                                            children={langPack('enter')}
                                            disabled={props.disableSubmit}
                                            onClick={signIn}
                                            isLoading={isLoading}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default LoginFormComponent;
