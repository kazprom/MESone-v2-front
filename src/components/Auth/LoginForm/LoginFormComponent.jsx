import React from 'react';
import { useStyles } from './LoginFormStyles';
import {
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Container, FormControl,
    FormControlLabel, InputLabel, MenuItem, Select,
    TextField
} from '@material-ui/core';
import { ButtonLoader } from '../../../ui';

function LoginFormComponent({ langPack, fields, changeField, ...props }) {
    const classes = useStyles();
    return (
        <Container fixed={true} maxWidth='xs' component='main'>
            <Card component='form' onSubmit={props.onSubmit}>
                <CardContent className={classes.cardContent}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="login"
                        label="Логин"
                        value={fields.login}
                        onChange={changeField}
                    />
                    <TextField
                        type='password'
                        name='password'
                        label={langPack.password}
                        value={fields.password}
                        onChange={changeField}
                    />
                    {(props.domains.length > 1) && <FormControl fullWidth variant='outlined'>
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
                    </FormControl>}
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <FormControlLabel
                        control={<Checkbox
                            name='remember'
                            checked={fields.remember}
                            onChange={changeField}
                            disabled={props.disableCheckbox}
                        />}
                        label={langPack.rememberMe}
                    />
                    <ButtonLoader
                        className={classes.button}
                        type='submit'
                        children={langPack.submit}
                        disabled={props.disableSubmit}
                        isLoading={props.isLoading}
                    />
                </CardActions>
            </Card>
        </Container>
    );
}

export default LoginFormComponent;