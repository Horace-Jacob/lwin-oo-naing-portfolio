declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export { ReactComponent };
  export default src;
}

declare module "*.glb";
