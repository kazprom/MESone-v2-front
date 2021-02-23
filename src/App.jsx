import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { appInit } from './store/app/actions';
import { connect } from 'react-redux';

function App(props) {

    useEffect(() => {
        props.init();
    }, [props]);

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <Routes/>
            </Suspense>
        </BrowserRouter>
    );
}

function mapDispatchToProps(dispatch) {
    return ({
        init: () => dispatch(appInit()),
    });
}

export default connect(null, mapDispatchToProps)(App);
