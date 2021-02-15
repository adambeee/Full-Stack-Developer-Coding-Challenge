import React, { useEffect } from 'react';

export default function ServiceMonitor({serviceMonitorData}: {
    serviceMonitorData: {
        icon: string
        label: string
        sublabel: string
        status: string
        notifications: string
    }
}) {
    React.useEffect(() => import("../astrouxds/rux-monitoring-icon/rux-monitoring-icon"), [])
    return (
        <rux-monitoring-icon
            icon={serviceMonitorData.icon}
            label={serviceMonitorData.label}
            sublabel={serviceMonitorData.sublabel}
            status={serviceMonitorData.status}
            notifications={serviceMonitorData.notifications}>
        </rux-monitoring-icon>
    )
}