import React from 'react';
import { connect } from 'react-redux';
import langPack from '../../lang/ru/Toast';
import ToastComponent from './ToastComponent';
import { getMessages } from '../../store/app/selectors';
import { messageHide } from '../../store/app/actions';

function Toast(props) {
    return (
        <ToastComponent
            langPack={langPack}
            messages={props.messages}
            onCloseMessage={props.onCloseMessage}
        />
    );
}

function mapStateToProps(store) {
    return ({
        messages: getMessages(store),
    });
}

function mapDispatchToProps(dispatch) {
    return ({
        onCloseMessage: payload => dispatch(messageHide(payload)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
