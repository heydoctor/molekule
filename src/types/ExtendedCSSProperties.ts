import { CSSProperties } from 'styled-components';

export interface ExtendedCSSProperties extends CSSProperties {
  '&:before'?: CSSProperties;
  ':before'?: CSSProperties;
  ':after'?: CSSProperties;
  '&:after'?: CSSProperties;
  '&:hover'?: CSSProperties;
  '&:active'?: CSSProperties;
  '&:disabled'?: CSSProperties;
}
