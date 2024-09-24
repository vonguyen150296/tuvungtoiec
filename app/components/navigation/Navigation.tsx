import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../models/ScreenProps.model";
import BottomNavigationCustom from "./BottomNavigation";
import CategoryDetailScreen from "../../screens/CategoryDetailScreen";

export default function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="bottom-menu"
        component={BottomNavigationCustom}
      />
      <Stack.Screen name="category-detail" component={CategoryDetailScreen} />
    </Stack.Navigator>
  );
}
