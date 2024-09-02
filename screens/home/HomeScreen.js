import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>What is your College CGPA Scale</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title="5.0 CGPA Scale"
          color="#0B6623"
          onPress={() =>
            navigation.navigate("Input Scores", {
              scale: 5,
            })
          }
        />
        <Button
          title="4.0 CGPA Scale"
          color="#0B6623"
          onPress={() =>
            navigation.navigate("Input Scores", {
              scale: 4,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignContent: "center",
    justifyContent: "center",
    gap: 60,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonWrapper: {
    gap: 20,
    marginHorizontal: 15,
  },
});
