import type { IconType } from "react-icons";

export interface NavigationItem {
  name: string;
  path: string;
  icon: IconType;
  section: "overview" | "workspace" | "team" | "account";
}
