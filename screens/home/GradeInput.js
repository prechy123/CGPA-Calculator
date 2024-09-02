import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
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
import { clearGrades, getGrades, storeGrades } from "../../utils/storage";

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
  function totalUnits() {
    let total = 0;
    for (let score of scores) {
      total += parseInt(score.unit);
    }
    return total;
  }
  function myPoints() {
    let total = 0;
    const grade = ["A", "B", "C", "D", "E", "F"];
    const gradeScore = {
      A: 5,
      B: 4,
      C: 3,
      D: 2,
      E: 1,
      F: 0,
    };
    for (let score of scores) {
      const gradeCapital = score.grade.toUpperCase();
      if (grade.includes(gradeCapital)) {
        total += gradeScore[gradeCapital] * parseInt(score.unit);
      }
    }
    return total;
  }
  function totalPoints() {
    let total = 0;
    const grade = ["A", "B", "C", "D", "E", "F"];
    const gradeScore = {
      A: 5,
      B: 4,
      C: 3,
      D: 2,
      E: 1,
      F: 0,
    };
    for (let score of scores) {
      total += parseInt(score.unit);
    }
    return total;
  }
  function gradePoint() {
    let total = 0;
    if (totalPoints() === 0) {
      return total;
    }
    total = myPoints() / totalPoints();
    return total.toFixed(2);
  }
  async function handleSaveSemesterGrade() {
    await storeGrades(scores)
    const data = await getGrades()
    console.log(data)
    // navigation.navigate("Save Grade");
    // await clearGrades()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Grade Input Screen</Text>
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
          <ScrollView style={styles.fieldsWrapper}>
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
          </ScrollView>
        </DataTable>
        <View style={{ marginTop: 15 }}>
          <Button
            title="Add Course"
            onPress={handleAddCourse}
            color="#0B6623"
          />
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 30 }}>
        <Button
          title="Save Semester grade"
          onPress={handleSaveSemesterGrade}
          color="#0B6623"
        />
      </View>
      <View style={styles.grade}>
        {/* <Text style={styles.gradeText}>Total Units: {totalUnits()}</Text> */}
        <Text style={styles.gradeText}>Semester GP: {gradePoint()}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  tableWrapper: {
    width: "100%",
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  fieldsWrapper: {
    maxHeight: 300,
  },
  grade: {
    width: 140,
    position: "absolute",
    right: 20,
    top: 20,
    borderWidth: 2,
    borderColor: "#0B6623",
    borderRadius: 10,
    padding: 20,
    gap: 2,
  },
});
