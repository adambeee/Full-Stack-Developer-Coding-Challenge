import React, { useEffect } from 'react';
import ServiceMonitor from './service-monitor';

const serviceMonitorData = {
    elcomp: {
        icon: 'processor', 
        label: 'ELCOMP',
        sublabel: '', 
        status: 'normal',
        notifications: ''
    },
    udl: {
        icon: 'equipment', 
        label: 'UDL',
        sublabel: '', 
        status: 'normal',
        notifications: ''
    },
    lamod: {
        icon: 'antenna', 
        label: 'lamod',
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
                <ServiceMonitor serviceMonitorData={serviceMonitorData.udl}></ServiceMonitor>
            </ul>
            <ul className="status-indicators__indicator">
                <ServiceMonitor serviceMonitorData={serviceMonitorData.elcomp}></ServiceMonitor>
            </ul>
            <ul className="status-indicators__indicator">
                <ServiceMonitor serviceMonitorData={serviceMonitorData.lamod}></ServiceMonitor>
            </ul>
        </div>
    )
}