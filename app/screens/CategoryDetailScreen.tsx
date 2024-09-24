import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParam } from "../models/ScreenProps.model";

type Props = StackScreenProps<RootStackParam, "category-detail">;

const CategoryDetailScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "test " + id,
    });
  }, []);
  return (
    <View>
      <Text>Test detail</Text>
    </View>
  );
};

export default CategoryDetailScreen;
