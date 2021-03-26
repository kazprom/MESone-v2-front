import { LOADER_TOGGLE, MESSAGE_SET_LIST, CHANGE_TITLE } from './actions';

const initialState = {
    lang:"ru_RU",
    langPack:{
        ru_RU:{
            App:{
                "settings":"Настройки",
            },
            Auth:{
                "username": 'имя пользователя',
                "authorization": 'авторизация',
                "authenticate": 'аутентификация',
                "enter": 'вход',
                "exit": 'выйти',
                "login": 'логин',
                "typeAuthenticate": 'тип аутентификации',
                "password": 'пароль',
                "remember": 'запомнить',
                submit: {
                    "login":'войти',
                },
            },
            Dashboard:{
                "dashboard": 'приборная панель'
            },
            Installer:{
                "installer": 'установщик',
                "basic": 'базовые',
                "database": 'база данных',
                "save": 'сохранить',
                "host": 'хост',
                "port": 'порт',
                "connection successful": 'успешное подключение',
                "connection unsuccessful": 'неудачное подключение',
                "settings save": 'настройки сохранены',
                "error": 'ошибка',
                "errors": 'ошибки',
                "create": 'создать',
                "formatting": 'форматирование',
                "clear": 'очистить',
                "download": 'скачать',
                "upload": 'загрузить',
                "delete": 'удалить',
            },
            EncryptionKey:{
                "encryption key": 'ключ шифрования',
                "create new": 'создать новый',
                "jwt key": 'jwt ключ',
                "app key": 'app ключ',
            },
            Toast:{
                "titleSuccess": 'успешно.',
                "titleError": 'ошибка!',
                "titleWarning": 'внимание!',
                "titleInfo": 'информация.',
            },
        }
    },
    name:"MESOne",
    title:"MESOne",
    apiServer:"http://kazprom.core-mesone-v2-back/api/graphql",
    isLoading: false,
    messages: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case LOADER_TOGGLE:
            return { ...state, isLoading: action.payload };
        case CHANGE_TITLE:
            return { ...state, title: action.payload };
        case MESSAGE_SET_LIST:
            return { ...state, messages: action.payload };
        default:
            return state;
    }
}
