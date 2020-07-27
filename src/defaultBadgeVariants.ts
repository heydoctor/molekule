import { VariantObject } from './types';

export const getDefaultBadgeVariants = (colors: Record<string, string>): VariantObject =>
  ({
    primary: {
      backgroundColor: colors.primaryLightest,
      color: colors.primaryDark,
    },
    success: {
      backgroundColor: colors.greenLightest,
      color: colors.greenDark,
      '&:before': {
        color: colors.green,
      },
    },
    danger: {
      backgroundColor: colors.redLightest,
      color: colors.redDark,
    },
    warning: {
      backgroundColor: colors.orangeLightest,
      color: colors.orangeDark,
    },
    info: {
      backgroundColor: colors.blueLightest,
      color: colors.blueDark,
    },
    grey: {
      backgroundColor: colors.greyLight,
      color: colors.greyDarker,
    },
  } as const);
