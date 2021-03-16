import React, {useState} from 'react';
import {batch, useDispatch, useSelector} from 'react-redux';
import langPack from '../../../lang/ru/Auth';
import LoginFormComponent from './LoginFormComponent';
import * as actions from '../../../store/auth/actions';
import * as appSelector from '../../../store/app/selectors';
import * as authSelector from '../../../store/auth/selectors';

export default function LoginForm(props) {
    let isLoading=useSelector(appSelector.isLoading)
    let domains=useSelector(authSelector.domains)
    let dispatch=useDispatch();
    let authSignIn = (payload)=>dispatch(actions.authSignIn(payload));

    const domainsList = [
        {
            id: 'default',
            name: 'Встроенная система безопасности'
        },
        ...domains?.filter(item => item.enabled),
    ];

    const [selectedDomain, setSelectedDomain] = useState(domainsList[0].id);
    const [payload, setPayload] = useState({ login: '', password: '', domain_id: null, remember: false });

    function changeField(event) {
        const { name, value, checked } = event.target;
        if (name === 'domain_id') {
            batch(() => {
                setSelectedDomain(value);
                setPayload(prevState => ({ ...prevState, [name]: value === 'default' ? null : value }));
            });
            return;
        }
        if (name === 'remember') {
            setPayload(prevState => ({ ...prevState, [name]: checked }));
            return;
        }
        setPayload(prevState => ({ ...prevState, [name]: value }));
    }

    function handleDisableCheckbox() {
        return payload.login.toLowerCase() === 'root';
    }

    function handleDisableSubmit() {
        const { login, password } = payload;
        return (login === '' || password === '');
    }

    function signInHandler(event) {
        authSignIn(payload);
    }

    return (<LoginFormComponent
        langPack={langPack}
        isLoading={isLoading}
        disableSubmit={handleDisableSubmit()}
        disableCheckbox={handleDisableCheckbox()}
        fields={payload}
        changeField={changeField}
        domains={domainsList}
        selectedDomain={selectedDomain}
        signIn={signInHandler}
    />);
}
