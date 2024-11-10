import React from 'react';
import { PaletteMode } from '@mui/material';

const COLOR_MODE_STORAGE_KEY = '__mui_theme_color_mode__';

export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

// Function to check if provided value is a valid color mode value
const isValidColorMode = (value: any): value is ColorMode => {
  return Object.values(ColorMode).includes(value);
};

// Function to check if provided value is a valid Mui palette mode value
const isValidMuiPaletteMode = (value: any): value is PaletteMode => {
  return value === 'light' || value === 'dark';
};

// Function to acquire a fallback color mode
const getFallbackColorMode = (): ColorMode => ColorMode.System;

// Function to acquire a color mode from the browser's local storage
const getColorModeFromLocalStorage = (): ColorMode => {
  const modeValue = localStorage.getItem(COLOR_MODE_STORAGE_KEY);
  return isValidColorMode(modeValue) ? modeValue : getFallbackColorMode();
};

export const convertColorModeToMuiPaletteMode = (colorMode: ColorMode): PaletteMode => {
  // Return internal color mode if it is already compatible with Mui palette modes
  if (isValidMuiPaletteMode(colorMode)) return colorMode;

  // Return dark color mode if user's system is set to dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return ColorMode.Dark;
  }

  // Otherwise, return light mode
  return ColorMode.Light;
};

// Function to acquire initial Mui palette mode
export const getInitialMuiPaletteMode = (): PaletteMode => {
  const colorMode = getColorModeFromLocalStorage();
  return convertColorModeToMuiPaletteMode(colorMode);
};

export type ColorModeToggle = (colorMode: ColorMode) => void;
export const ColorModeContext = React.createContext<ColorModeToggle>(() => {});
export const useToggleColorMode = (): ColorModeToggle => React.useContext(ColorModeContext);
