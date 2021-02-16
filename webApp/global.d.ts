//https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
//https://github.com/microsoft/TypeScript/issues/4648
declare module JSX {
    interface IntrinsicElements {
      "rux-clock"               : any,
      "rux-log"                 : any,
      "rux-status"              : any,
      "rux-global-status-bar"   : any,
      "rux-monitoring-icon"     : any
    }
  }