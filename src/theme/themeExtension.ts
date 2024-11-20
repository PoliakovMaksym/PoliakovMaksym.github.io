import { DeepPartial } from 'types';

export const CustomThemeExtension = {
  components: {
    BossCard: {
      maxWidth: 450,
    },
  },
};

interface CustomMuiThemeExtension {
  custom: typeof CustomThemeExtension;
}

declare module '@mui/material/styles' {
  interface Theme extends CustomMuiThemeExtension {}
  interface ThemeOptions extends DeepPartial<CustomMuiThemeExtension> {}
}
