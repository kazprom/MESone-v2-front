import React from 'react';

function DashboardComponent({ langPack, ...props }) {
    return (
        <div>{langPack.dashboard}</div>
    );
}

export default DashboardComponent;