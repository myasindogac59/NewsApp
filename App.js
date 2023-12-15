import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import news_banner_data from "./news_banner_data.json";
import news_data from "./news_data.json";
import NewsCard from "./src/Components/NewsCard";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>DGC News</Text>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsVerticalScrollIndicator={false}>
              {news_banner_data.map((bannerNews) => (
                <Image
                  source={{ uri: bannerNews.imageUrl }}
                  style={styles.banner_image}
                />
              ))}
            </ScrollView>
          )}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: "white",
  },
  brand: {
    fontSize: 28,
    fontWeight: "500",
    marginLeft: 10,
    fontStyle: "italic",
  },
  banner_image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 3,
  },
});
