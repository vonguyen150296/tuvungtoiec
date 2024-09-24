import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORY_TYPE } from "../models/Data.model";
import CategoryCard from "../components/category/CategoryCard";

const categories: CATEGORY_TYPE[] = [
  {
    id: 1,
    text: "Technology",
    explanation: "Tiến bộ công nghệ.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/business_planning.jpg",
  },
  {
    id: 2,
    text: "Health",
    explanation: "Sức khỏe, y tế.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/conferences.jpg",
  },
  {
    id: 3,
    text: "Science",
    explanation: "Khám phá khoa học.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/computers_and_the_internet.jpg",
  },
  {
    id: 4,
    text: "Education",
    explanation: "Học tập, giảng dạy.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/office_technology.jpg",
  },
  {
    id: 5,
    text: "Finance",
    explanation: "Tài chính, đầu tư.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/office_procedures.jpg",
  },
  {
    id: 6,
    text: "Entertainment",
    explanation: "Phim ảnh, âm nhạc.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/electronics.jpg",
  },
  {
    id: 7,
    text: "Sports",
    explanation: "Tin tức thể thao.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/office_technology.jpg",
  },
  {
    id: 8,
    text: "Travel",
    explanation: "Điểm đến, văn hóa.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/office_procedures.jpg",
  },
  {
    id: 9,
    text: "Food",
    explanation: "Công thức nấu ăn.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/office_procedures.jpg",
  },
  {
    id: 10,
    text: "Fashion",
    explanation: "Xu hướng thời trang.",
    image:
      "https://600tuvungtoeic.com/template/english/images/lesson/office_technology.jpg",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignItems: "center" }}>
          <Icon source="gamepad-variant-outline" size={100} color="#debcce" />
        </View>
        <Text style={styles.title}>Let's Play</Text>
        <Text style={styles.subTitle}>
          Choose a category below to start learning
        </Text>
      </View>

      <View style={{ flex: 3 }}>
        <FlatList
          data={categories}
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CategoryCard item={item} />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 20 }}
          // ListEmptyComponent={() => {
          //   return !loading ? (
          //     <Text style={{ textAlign: "center", color: theme.colors.greyText }}>
          //       {t("statement.empty")}
          //     </Text>
          //   ) : null;
          // }}
          // onScroll={onScroll}
          // onEndReached={fetchMoreData}
          // onEndReachedThreshold={0.8}
          // ListFooterComponent={loading ? <TransportSkeleton /> : null}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: "#846d9f",
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  list: {
    paddingTop: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#c2eaea",
  },
});
