declare module "*.svg" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare module "*.svg?react" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.sass" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.module.scss" {
  const content: Record<string, string>;
  export default content;
}
