import {
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function AboutScreen() {
  const openWebsite = async (websiteUrl) => {
    await Linking.openURL(websiteUrl);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ gap: 30, paddingHorizontal: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          This CGPA calculator is designed specifically for Nigerian students to
          simplify the process of calculating their Cumulative
          Grade Point Average (CGPA).
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Developed by:</Text> Bamidele,
          Ayomide Precious
        </Text>
        <View>
          <Text style={{ textAlign: "center", fontSize: 16, marginBottom: 5 }}>
            Visit me on:{" "}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}
          >
            <Pressable
              onPress={() => openWebsite("https://github.com/prechy123")}
            >
              <Text style={styles.linkText}>GitHub</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                openWebsite(
                  "https://www.linkedin.com/in/ayomide-bamidele-347573275"
                )
              }
            >
              <Text style={styles.linkText}>Linkedin</Text>
            </Pressable>
          </View>
        </View>
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
  },
  linkText: {
    backgroundColor: "#0B6623",
    paddingVertical: 7,
    paddingHorizontal: 12,
    color: "white",
    borderRadius: 5,
    elevation: 5
  },
});
