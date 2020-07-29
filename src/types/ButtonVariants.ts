import { defaultButtonVariants } from '../defaultButtonVariants';
import { ExtendedCSSProperties } from './ExtendedCSSProperties';

type Transform<T> = {
  [P in keyof T]: ExtendedCSSProperties;
};

export interface ButtonVariants extends Transform<typeof defaultButtonVariants> {}
