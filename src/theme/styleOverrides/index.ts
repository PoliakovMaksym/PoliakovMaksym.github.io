import { buttonOverride } from './Button';
import { cssBaselineOverride } from './CssBaseline';
import { outlinedInputOverride } from './TextField';

export const styleOverrides = Object.assign({
  MuiButton: buttonOverride,
  MuiCssBaseline: cssBaselineOverride,
  MuiOutlinedInput: outlinedInputOverride,
});
