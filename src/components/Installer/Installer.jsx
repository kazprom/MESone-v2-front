import React from 'react';
import { connect } from 'react-redux';
import InstallerComponent from './InstallerComponent';
import langPack from '../../lang/ru/Installer'
import { authSignOut } from '../../store/auth/actions';

function Installer(props) {
    return (<InstallerComponent
        langPack={langPack}
        onClick={props.logout}
    />);
}

function mapDispatchToProps(dispatch) {
    return ({
        logout: () => dispatch(authSignOut()),
    });
}

export default connect(null, mapDispatchToProps)(Installer);