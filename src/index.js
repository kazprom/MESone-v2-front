import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AppController from "./controllers/AppController/AppController";

import "./index.scss";
import Toast from "./components/Toast/Toast";

const appElement = document.getElementById('root');
const Application=(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppController/>
            <Toast/>
        </ThemeProvider>
    </Provider>
);
render(Application, appElement);
