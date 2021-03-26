import React, {Suspense, useEffect, useRef} from 'react';
import * as actions from '../../store/app/actions';
import {useDispatch} from 'react-redux';
import {AppController} from "../../controllers";
import {BrowserRouter} from "react-router-dom";

export default function App(props) {
    let title=useRef([]);
    let dispatch=useDispatch();
    let appInit=()=>dispatch(actions.appInit());
    useEffect(() => {
        appInit();
    }, [props]);

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <AppController name={"App"} title={title}/>
            </Suspense>
        </BrowserRouter>
    );
}
