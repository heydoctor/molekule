// import original module declarations
import 'styled-components';
import { ThemeColors } from 'src/types/ThemeColors';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    borderRadius: string;

    colors: ThemeColors;
  }
}
