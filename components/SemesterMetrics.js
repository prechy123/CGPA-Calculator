import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import gradePoint, { myPoints, totalUnits } from "../utils/gradeCalculator";

export default function SemesterMetrics({grade}) {
  const level = Object.keys(grade)[0]
  const gp = gradePoint(grade[level])
  const myScore = myPoints(grade[level])
  const unit = totalUnits(grade[level])

  return (
    <View style={styles.wrapper}>
      <Text style={{textAlign: 'center', fontSize: 24, fontWeight: "bold"}}>{level} Semester</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
    textAlign: 'center',
    fontSize: 16
  },
  levelFunction: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    position: 'absolute',
    right: 0,
  }
});
