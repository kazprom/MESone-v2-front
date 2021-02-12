import React, { useEffect } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import useStyles from './ToastStyles';

export const ToastMessage = ({ message, onClose, langPack }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose(message);
            clearTimeout(timeout);
        }, message.lifeTime);
    }, [message, onClose]);

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getTitle ~~~*/

    const getTitle = () => {
        if (message.title) {
            return message.title;
        }
        switch (message.severity) {
            case 'success':
                return langPack.titleSuccess;
            case 'error':
                return langPack.titleError;
            case 'warning':
                return langPack.titleWarning;
            default:
                return langPack.titleInfo;
        }
    }
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~*/

    const classes = useStyles();
    return (message) ? (
        <Alert
            className={classes.message}
            severity={message.severity}
            onClose={() => onClose(message)}
        >
            <AlertTitle children={getTitle()}/>
            {message.message}
        </Alert>
    ) : null;
}

export const ToastComponent = props => {
    const classes = useStyles();
    return (
        <div className={classes.root} children={
            props.messages.map((content, index) => (
                <ToastMessage
                    key={index}
                    message={content}
                    langPack={props.langPack}
                    onClose={props.onCloseMessage}
                />
            ))
        }/>
    );
}

export default ToastComponent;