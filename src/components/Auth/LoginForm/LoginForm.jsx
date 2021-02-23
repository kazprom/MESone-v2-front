import React, { useState } from 'react';
import { batch, connect } from 'react-redux';
import langPack from '../../../lang/ru/Auth';
import LoginFormComponent from './LoginFormComponent';
import { authSignIn } from '../../../store/auth/actions';
import { isLoading } from '../../../store/app/selectors';
import { domainsSelector } from '../../../store/auth/selectors';

function LoginForm(props) {

    const domains = [
        {
            id: 'default',
            name: 'Встроенная система безопасности'
        },
        ...props.domains.filter(item => item.enabled),
    ];

    const [selectedDomain, setSelectedDomain] = useState(domains[0].id);
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

    function formAction(event) {
        event.preventDefault();
        props.authLoginRequest(payload);
    }

    return (<LoginFormComponent
        langPack={langPack}
        isLoading={props.isLoading}
        disableSubmit={handleDisableSubmit()}
        disableCheckbox={handleDisableCheckbox()}
        fields={payload}
        changeField={changeField}
        domains={domains}
        selectedDomain={selectedDomain}
        onSubmit={formAction}
    />);
}

function mapStateToProps(state) {
    return ({
        isLoading: isLoading(state),
        domains: domainsSelector(state),
    });
}

function mapDispatchToProps(dispatch) {
    return ({
        authLoginRequest: payload => dispatch(authSignIn(payload)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);