import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ScoreField from "../../components/ScoreField";
import { DataTable } from "react-native-paper";
import { useState } from "react";
import SavedField from "../../components/SavedScore";
import { v4 } from "uuid";

export default function GradeInput({ navigation, route }) {
  console.log(route.params?.scale);
  const [scores, setScores] = useState([]);
  const [courseCode, setCourseCode] = useState("");
  const [unit, setUnit] = useState("");
  const [grade, setGrade] = useState("");

  function handleAddCourse() {
    if (courseCode && unit && grade) {
      setScores((prevScores) => [
        ...prevScores,
        { number: scores.length + 1, courseCode, unit, grade, id: v4() },
      ]);
      setCourseCode("");
      setUnit("");
      setGrade("");
    } else {
      alert("Ensure all cells are filled.");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Grade Input Screen</Text>
      <View style={styles.tableWrapper}>
        <DataTable>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>
              <Text style={styles.titleText}>S/No</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              <Text style={styles.titleText}>Course Code</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              <Text style={styles.titleText}>Unit</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              <Text style={styles.titleText}>Grade(A-F)</Text>
            </DataTable.Title>
          </DataTable.Header>
          {scores.length !== 0 ? (
            <>
              {scores.map((score, index) => (
                <SavedField
                  key={score.id}
                  courseCode={score.courseCode}
                  unit={score.unit}
                  grade={score.grade}
                  setScores={setScores}
                  number={index}
                />
              ))}
              <ScoreField
                setCourseCode={setCourseCode}
                courseCode={courseCode}
                setUnit={setUnit}
                unit={unit}
                setGrade={setGrade}
                grade={grade}
                number={scores.length}
              />
            </>
          ) : (
            <ScoreField
              setCourseCode={setCourseCode}
              courseCode={courseCode}
              setUnit={setUnit}
              unit={unit}
              setGrade={setGrade}
              grade={grade}
              number={scores.length}
            />
          )}
        </DataTable>
        <Button title="Add Course" onPress={handleAddCourse} />
      </View>
      {/* <Button
          title="Next"
          onPress={() => navigation.navigate("Save Grade")}
          
        /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  tableWrapper: {
    width: "90%",
    maxWidth: 600,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
  },
  cell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
});
