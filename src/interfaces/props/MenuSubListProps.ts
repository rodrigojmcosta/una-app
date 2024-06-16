import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface MenuSubListProps {
    to: string;
    children: React.ReactNode;
    icon: IconDefinition;
    name: string;
}