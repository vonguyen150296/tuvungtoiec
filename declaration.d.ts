import { MD3Theme } from "react-native-paper";

declare module "react-native-paper" {
  export interface MD3Theme {
    colors: {
      //custom
      text: string;
      placeholder: string;

      background: string;
      primary: string;
      primaryContainer: string;
      secondary: string;
      secondaryContainer: string;
      tertiary: string;
      tertiaryContainer: string;
      surface: string;
      surfaceVariant: string;
      surfaceDisabled: string;
      background: string;
      error: string;
      errorContainer: string;
      onPrimary: string;
      onPrimaryContainer: string;
      onSecondary: string;
      onSecondaryContainer: string;
      onTertiary: string;
      onTertiaryContainer: string;
      onSurface: string;
      onSurfaceVariant: string;
      onSurfaceDisabled: string;
      onError: string;
      onErrorContainer: string;
      onBackground: string;
      outline: string;
      outlineVariant: string;
      inverseSurface: string;
      inverseOnSurface: string;
      inversePrimary: string;
      shadow: string;
      scrim: string;
      backdrop: string;
      elevation: {
        level1: string;
      };
    };
  }
}
