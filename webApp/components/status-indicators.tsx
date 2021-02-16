import React, { useEffect } from 'react';
import ServiceMonitor from './service-monitor';

const serviceMonitorData = {
    server: {
        icon: 'antenna', 
        label: 'GRM Server',
        sublabel: '', 
        status: 'normal',
        notifications: ''
    }
};
export default function StatusIndicators() {
    React.useEffect(() => import("@astrouxds/rux-status"), [])
    return (
        <div className="rux-form-field">
            <ul className="status-indicators__indicator">
                <ServiceMonitor serviceMonitorData={serviceMonitorData.server}></ServiceMonitor>
            </ul>
        </div>
    )
}