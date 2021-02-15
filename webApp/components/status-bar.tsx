import Clock from './clock';
import StatusIndicators from './status-indicators';
import React, { useEffect } from 'react';

const AppMeta = ({head}) => (
    <div className="app-meta">
        <h1>GRM</h1>
    </div>
);

export default function StatusBar() {
    React.useEffect(() => import("@astrouxds/rux-global-status-bar"), [])
    return (
        <div className="status-bar" >
            <rux-global-status-bar> 
                <AppMeta head="Monitor" /> 
                <Clock></Clock>
                <StatusIndicators></StatusIndicators>
            </rux-global-status-bar>
        </div>
    );
}