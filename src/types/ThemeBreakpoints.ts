import { defaultBreakpoints } from '../defaultBreakpoints';

type Transform<T> = {
  [P in keyof T]: string;
};

export interface ThemeBreakpoints extends Transform<typeof defaultBreakpoints> {}
