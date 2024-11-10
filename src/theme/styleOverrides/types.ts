import { ThemeOptions } from '@mui/material';

type ThemeComponents = NonNullable<ThemeOptions['components']>;
export type StyleOverrides<TComponent extends keyof ThemeComponents> = ThemeComponents[TComponent];
