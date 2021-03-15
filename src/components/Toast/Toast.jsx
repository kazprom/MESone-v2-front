import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import langPack from '../../lang/ru/Toast';
import ToastComponent from './ToastComponent';
import * as selectors from '../../store/app/selectors';
import * as actions from "../../store/app/actions";

export default function Toast(props) {
    let getMessages = useSelector(selectors.getMessages);
    let dispatch=useDispatch();
    let onCloseMessage=(payload)=>dispatch(actions.messageHide(payload));
    return (
        <ToastComponent
            langPack={langPack}
            messages={getMessages}
            onCloseMessage={onCloseMessage}
        />
    );
}
