import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { DataTable } from "react-native-paper";

export default function ScoreField({
  setCourseCode,
  courseCode,
  setUnit,
  unit,
  setGrade,
  grade,
  number
}) {
  function handleGrade(letter) {
    const acceptedGrades = ["A", "B", "C", "D", "E", "F", ""];
    if (acceptedGrades.includes(letter.toUpperCase())) {
      setGrade(letter);
    }
  }
  function handleUnit(number) {
    if (!isNaN(number)) {
      setUnit(number);
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
          onChangeText={setCourseCode}
          value={courseCode}
          autoCorrect={false}
        />
      </DataTable.Cell>
      <DataTable.Cell style={styles.cell}>
        <TextInput
          placeholder="Unit"
          style={styles.input}
          onChangeText={handleUnit}
          value={unit}
          inputMode="numeric"
        />
      </DataTable.Cell>
      <DataTable.Cell style={styles.cell}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Grade"
            style={styles.input}
            value={grade}
            onChangeText={handleGrade}
          />
          {/* <Image
            source={require("../assets/delete.png")}
            style={{ width: 20, height: 20 }}
          /> */}
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
