import { CSSProperties } from 'styled-components';

export interface ExtendedCSSProperties extends CSSProperties {
  '&:before'?: CSSProperties;
  '&:after'?: CSSProperties;
  '&:hover'?: CSSProperties;
  '&:active'?: CSSProperties;
  '&:disabled'?: CSSProperties;
}

export type VariantObject = Record<string, ExtendedCSSProperties>;
