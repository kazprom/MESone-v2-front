import React from 'react';
import { Button } from '@material-ui/core';

function InstallerComponent({ langPack, ...props }) {
    return (
        <div>
            <div>{langPack.installer}</div>
            <Button onClick={props.onClick}>logout</Button>
        </div>
    );
}

export default InstallerComponent;