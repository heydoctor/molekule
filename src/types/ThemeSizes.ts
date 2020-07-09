import { defaultThemeSizes } from '../defaultThemeSizes';
import { ThemeSize } from './ThemeSize';

type Transform<T> = {
  [P in keyof T]: ThemeSize;
};

export interface ThemeSizes extends Transform<typeof defaultThemeSizes> {}
