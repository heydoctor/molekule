import { defaultBadgeVariants } from './defaultBadgeVariants';
import { defaultButtonVariants } from './defaultButtonVariants';

export const defaultThemeVariants = {
  Alert: defaultBadgeVariants,
  Badge: defaultBadgeVariants,
  Button: defaultButtonVariants,
} as const;
