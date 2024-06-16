import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface FeatureCardProps {
    feature: string;
    icon: IconDefinition;
    to: () => void;
    iconDimensionClass: string;
}