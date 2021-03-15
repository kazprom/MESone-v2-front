import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes.jsx';
import * as actions from '../../store/app/actions';
import {useDispatch} from 'react-redux';

export default function App(props) {
    let dispatch=useDispatch();
    let appInit=()=>dispatch(actions.appInit());
    useEffect(() => {
        appInit();
    }, [props]);

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <Routes/>
            </Suspense>
        </BrowserRouter>
    );
}
