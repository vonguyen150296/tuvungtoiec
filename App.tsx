import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

//theme
import { LightTheme } from "./styles/lightTheme";

//components
import Navigation from "./app/components/navigation/Navigation";



export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
