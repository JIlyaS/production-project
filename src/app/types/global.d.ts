/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

// declare module '*.svg' {
//   const content: any;
//   export default content;
// }

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}


declare const __IS_DEV__: boolean;