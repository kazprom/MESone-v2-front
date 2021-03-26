import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import "./index.scss";
import Toast from "./components/Toast/Toast";
import App from "./components/App/App";

const appElement = document.getElementById('root');
const Application=(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
            <Toast/>
        </ThemeProvider>
    </Provider>
);
render(Application, appElement);
