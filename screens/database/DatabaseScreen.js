import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SemesterMetrics from "../../components/SemesterMetrics";
import { useEffect, useState } from "react";
import { clearGrades, getGrades } from "../../utils/storage";
import { myCgpa } from "../../utils/gradeCalculator";
import { v4 } from "uuid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useGrades } from "../../context/GradesContext";

export default function DatabaseScreen() {
  const navigation = useNavigation();
  const route = useRoute()
  const { refresh } = route.params || {};
  const {grades, setGrades} = useGrades()
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
    setGrades(myGrades);
    setCgpa(myCgpa(myGrades));
  };
  useEffect(() => {
    myGrade();
  }, [refresh]);
  return (
    <SafeAreaView style={styles.container}>
      {grades && grades.length > 0 && (
        <>
          <Text style={styles.heading}>Total CGPA is: {cgpa}</Text>
          <View style={{ marginHorizontal: 15 }}>
            <Button
              title="Clear Database"
              onPress={handleClearDB}
              color="#0B6623"
            />
          </View>
        </>
      )}

      <ScrollView>
        {grades && grades.length > 0 ? (
          grades.map((grade) => (
            <SemesterMetrics key={v4()} grade={grade} setGrades={setGrades} />
          ))
        ) : (
          <View style={{ marginHorizontal: 15, marginTop: 70 }}>
            <Text
              style={{ fontSize: 32, textAlign: "center", marginBottom: 20 }}
            >
              No Grade stored
            </Text>
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
