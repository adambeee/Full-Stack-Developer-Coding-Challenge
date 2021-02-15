import React, { useEffect } from 'react';

export default function Clock() {
    React.useEffect(() => import("@astrouxds/rux-clock"), [])
    return (<rux-clock timezone="UTC"></rux-clock>)
}