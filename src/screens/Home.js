import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View style={{ ...styles.container }}>
      <Text>Home page</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Detail")}
        style={{ marginTop: 16 }}
      >
        Go to Details
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
