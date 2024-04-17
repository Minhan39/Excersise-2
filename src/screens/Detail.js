import { StyleSheet, View } from "react-native";
import { Appbar, Text } from "react-native-paper";

const Detail = () => {
  return (
    <View style={{ ...styles.container }}>
      <Text>Details page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Detail;
