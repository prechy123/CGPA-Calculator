import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SemesterMetrics from "../components/SemesterMetrics";
import { useEffect, useState } from "react";
import { getGrades } from "../utils/storage";
import { myCgpa } from "../utils/gradeCalculator";

export default function DatabaseScreen() {
  const [grades, setGrades] = useState([]);
  const [cgpa, setCgpa] = useState("");

  const myGrade = async () => {
    const myGrades = await getGrades();
    setGrades(myGrades);
    setCgpa(myCgpa(myGrades));
  };
  useEffect(() => {
    myGrade();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Total CGPA is: {cgpa}</Text>
      <ScrollView>
        {grades.length > 0 ? (
          grades.map((grade, index) => (
            <SemesterMetrics key={index} grade={grade} />
          ))
        ) : (
          <Text>No Grade stored</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
  },
});
