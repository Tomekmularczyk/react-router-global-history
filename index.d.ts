import { History } from "history";

declare module "react-router-global-history" {
  export const ReactRouterGlobalHistory: React.ComponentType<any>;
  export default function getHistory(): History;
}
