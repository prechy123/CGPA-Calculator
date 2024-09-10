import React, { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import gradePoint, { myPoints, totalUnits } from "../utils/gradeCalculator";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import { getGrades, levels, updateGrades } from "../utils/storage";
import { useNavigation } from "@react-navigation/native";

export default function SemesterMetrics({ grade, setGrades }) {
  const navigation = useNavigation();
  const level = Object.keys(grade)[0];
  const gp = gradePoint(grade[level]);
  const myScore = myPoints(grade[level]);
  const unit = totalUnits(grade[level]);

  const handleEdit = () => {
    navigation.navigate("Edit Score", {
      level,
    });
  };

  const handleDelete = async () => {
    const grades = await getGrades();
    const filteredGrades = grades.filter(
      (eachLevel) => Object.keys(eachLevel)[0] !== level
    );
    await updateGrades(filteredGrades);
    setGrades(filteredGrades);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        {level} Semester
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <Text style={styles.text}>Total Unit</Text>
          <Text style={styles.text}>{unit}</Text>
        </View>
        <View>
          <Text style={styles.text}>Total Score</Text>
          <Text style={styles.text}>{myScore}</Text>
        </View>
        <View>
          <Text style={styles.text}>GP</Text>
          <Text style={styles.text}>{gp}</Text>
        </View>
      </View>
      <View style={styles.levelFunction}>
        <Pressable onPress={handleEdit}>
          <View style={{ width: 30, height: 30, alignItems: "center" }}>
            <Image source={editIcon} style={{ width: 20, height: 20 }} />
          </View>
        </Pressable>
        <Pressable onPress={handleDelete}>
          <View style={{ width: 30, height: 30, alignItems: "center" }}>
            <Image source={deleteIcon} style={{ width: 20, height: 20 }} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 600,
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    gap: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  levelFunction: {
    position: "absolute",
    top: 6,
    right: 6,
    flexDirection: "row",
    gap: 20,
  },
});
