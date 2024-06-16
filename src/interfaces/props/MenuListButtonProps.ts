import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface MenuListButtonProps {
  to: string;
  children: React.ReactNode;
  icon: IconDefinition;
  highlight?: boolean;
}