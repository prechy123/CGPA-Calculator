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
import { clearGrades, getGrades } from "../utils/storage";
import { myCgpa } from "../utils/gradeCalculator";

export default function DatabaseScreen({ navigation, route }) {
  const { refresh } = route.params || {};
  const [grades, setGrades] = useState([]);
  const [cgpa, setCgpa] = useState("");

  const handleClearDB = async () => {
    await clearGrades();
    setGrades([]);
  };

  const handleNavigateToHomePage = () => {
    navigation.navigate("Home");
  };

  const myGrade = async () => {
    const myGrades = await getGrades();
    console.log("myGrades", myGrades);
    setGrades(myGrades);
    setCgpa(myCgpa(myGrades));
  };
  useEffect(() => {
    myGrade();
  }, [refresh]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Total CGPA is: {cgpa}</Text>

      <ScrollView>
        {grades && grades.length > 0 ? (
          ((
            <View style={{ marginHorizontal: 15 }}>
              <Button
                title="Clear Database"
                onPress={handleClearDB}
                color="#0B6623"
              />
            </View>
          ),
          grades.map((grade, index) => (
            <SemesterMetrics key={index} grade={grade} setGrades={setGrades} />
          )))
        ) : (
          <View style={{ marginHorizontal: 15 }}>
            <Text>No Grade stored</Text>
            <View>
              <Button
                title="Go to Home Page"
                onPress={handleNavigateToHomePage}
                color="#0B6623"
              />
            </View>
          </View>
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
