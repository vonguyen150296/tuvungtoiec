import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Surface } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParam } from "../../models/ScreenProps.model";
import { CATEGORY_TYPE } from "../../models/Data.model";

interface Props {
  item: CATEGORY_TYPE;
}

type NavigationProp = StackNavigationProp<RootStackParam, "category-detail">;

const CategoryCard: React.FC<Props> = ({ item }) => {
  const navigation: NavigationProp = useNavigation();

  return (
    <Surface style={styles.container} elevation={1}>
      <TouchableOpacity
        onPress={() => navigation.navigate("category-detail", { id: item.id })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.explantation}>{item.explanation}</Text>
      </TouchableOpacity>
    </Surface>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingBottom: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    width: "100%",
    aspectRatio: 1.3,
    marginBottom: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  explantation: {
    fontSize: 16,
    textAlign: "center",
  },
});
