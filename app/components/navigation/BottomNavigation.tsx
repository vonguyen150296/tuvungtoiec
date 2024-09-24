import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import HomeScreen from "../../screens/HomeScreen";
import TestScreen from "../../screens/TestScreen";

const BottomNavigationCustom = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "test",
      title: "Test",
      focusedIcon: "pencil-box-multiple",
      unfocusedIcon: "pencil-box-multiple-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    test: TestScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationCustom;
