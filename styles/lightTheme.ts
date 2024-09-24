import { MD3LightTheme, MD3Theme } from "react-native-paper";
export const LightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    text: "#000000",
    placeholder: "#9ba79b",
    background: "#FFFFFF",
    secondary: "#F1F4FF",
    tertiary: "#1F41BB",
    elevation: {
      level1: "#CBD6FF",
    },
  },
};
