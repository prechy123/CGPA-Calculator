import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function DatabaseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Database Screen</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
