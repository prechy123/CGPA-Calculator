import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { DataTable } from "react-native-paper";

export default function SavedField({
  courseCode,
  unit,
  grade,
  number,
  setScores,
}) {
  function handleEditUnit(text) {
    if (!isNaN(number)) {
      setScores((prevScores) =>
        prevScores.map((score, i) =>
          i === number ? { ...score, unit: text } : score
        )
      );
    }
  }
  function handleEditGrade(text) {
    const acceptedGrades = ["A", "B", "C", "D", "E", "F", ""];
    if (acceptedGrades.includes(text.toUpperCase())) {
      setScores((prevScores) =>
        prevScores.map((score, i) =>
          i === number ? { ...score, grade: text } : score
        )
      );
    }
  }
  return (
    <DataTable.Row>
      <DataTable.Cell>
        <View>
          <Text>{number + 1}.</Text>
        </View>
      </DataTable.Cell>
      <DataTable.Cell style={styles.cell}>
        <TextInput
          placeholder="Course Code"
          style={styles.input}
          value={courseCode}
          onChangeText={(text) =>
            setScores((prevScores) =>
              prevScores.map((score, i) =>
                i === number ? { ...score, courseCode: text } : score
              )
            )
          }
          autoCorrect={false}
        />
      </DataTable.Cell>
      <DataTable.Cell style={styles.cell}>
        <TextInput
          placeholder="Unit"
          style={styles.input}
          value={unit}
          onChangeText={handleEditUnit}
          inputMode="numeric"
        />
      </DataTable.Cell>
      <DataTable.Cell style={styles.cell}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Grade"
            style={styles.input}
            value={grade}
            onChangeText={handleEditGrade}
          />
          <Pressable
            onPress={() =>
              setScores((prev) => prev.filter((_, index) => index !== number))
            }
          >
            <Image
              source={require("../assets/delete.png")}
              style={{ width: 20, height: 20 }}
            />
          </Pressable>
        </View>
      </DataTable.Cell>
    </DataTable.Row>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cell: { alignItems: "center", justifyContent: "center" },
  input: {
    borderWidth: 0.4,
    borderRadius: 5,
    padding: 3,
    textAlign: "center",
  },
});
