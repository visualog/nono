/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#6200ee';
const tintColorDark = '#bb86fc';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: '#6200ee',
    secondary: '#03dac6',
    card: '#f9f9f9',
    border: '#E6E8EB',
    error: '#ba1a1a',
    success: '#2e7d32',
  },
  dark: {
    text: '#ECEDEE',
    background: '#121212',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: '#bb86fc',
    secondary: '#03dac6',
    card: '#1e1e1e',
    border: '#2C2C2C',
    error: '#cf6679',
    success: '#66bb6a',
  },
};
