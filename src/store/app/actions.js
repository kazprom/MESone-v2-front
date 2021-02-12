/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Actions ~~~ */

export const LOADER_TOGGLE = 'LOADER_TOGGLE';

export const MESSAGE_SHOW = 'MESSAGE_SHOW';
export const MESSAGE_HIDE = 'MESSAGE_HIDE';
export const MESSAGE_SET_LIST = 'MESSAGE_SET_LIST';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ActionsCreator ~~~ */

export const loaderToggle = payload => ({
    type: LOADER_TOGGLE,
    payload: payload,
});

export const messageShow = ({ severity = 'info', title = null, message = null, lifeTime = 1500 }) => ({
    type: MESSAGE_SHOW,
    payload: ({ severity, title, message, lifeTime }),
});

export const messageHide = ({ id }) => ({
    type: MESSAGE_HIDE,
    payload: id,
});

export const messageSetList = payload => ({
    type: MESSAGE_SET_LIST,
    payload: payload,
});
