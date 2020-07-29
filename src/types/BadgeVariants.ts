import { defaultBadgeVariants } from '../defaultBadgeVariants';
import { ExtendedCSSProperties } from './ExtendedCSSProperties';

type Transform<T> = {
  [P in keyof T]: ExtendedCSSProperties;
};

export interface BadgeVariants extends Transform<typeof defaultBadgeVariants> {}
