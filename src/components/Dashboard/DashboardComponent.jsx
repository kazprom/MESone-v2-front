import React from 'react';
import { Button } from '@material-ui/core';

function DashboardComponent({ langPack, ...props }) {
    return (
        <div>
            <div>{langPack.dashboard}</div>
            <Button onClick={props.onClick}>logout</Button>
        </div>
    );
}

export default DashboardComponent;