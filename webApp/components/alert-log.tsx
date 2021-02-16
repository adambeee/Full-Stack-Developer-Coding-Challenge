import React, { useEffect } from 'react';

export default function AlertLog() {
    React.useEffect(() => import("@astrouxds/rux-log/rux-log.js"), [])
    const myLogData = [
        {
          timestamp: new Date(1557503698781), // date from Unix Time Stamp number
          status: "off",
          message: "Antenna DGS 1 went offline."
        },
        {
          timestamp: new Date('2019-05-10T16:21:12.000Z'), // date from ISO 8601 string format
          status: "serious",
          message: "USA-177 experienced solar panel misalignment."
        },
      ];
    return (<rux-log data="${myLogData}"></rux-log>)
}