import AsyncStorage from "@react-native-async-storage/async-storage";

export const levels = [
  "1001st",
  "1002nd",
  "2001st",
  "2002nd",
  "3001st",
  "3002nd",
  "4001st",
  "4002nd",
  "5001st",
  "5002nd",
  "6001st",
  "6002nd",
  "7001st",
  "7002nd",
  "8001st",
  "8002nd",
  "9001st",
  "9002nd",
  "LEGEND🐐🐐",
];

const KEY = "Grades";

export const storeGrades = async (value) => {
  try {
    const retrievedGrade = await AsyncStorage.getItem(KEY);
    const grade = retrievedGrade != null ? JSON.parse(retrievedGrade) : null;
    
    if (grade === null) {
      const jsonGrade = JSON.stringify([{ "1001st": value }]);
      await AsyncStorage.setItem(KEY, jsonGrade);
      return;
    }

    let prevLevel = levels[0];
    for (let i = 0; i < grade.length; i++) {
      const levelSem = Object.keys(grade[i])[0];
      const correctLevelOrder = levels[i];

      if (levelSem !== correctLevelOrder) {
        prevLevel = levels[i - 1] || levels[0];
        break;
      }
      prevLevel = correctLevelOrder;
    }

    const nextLevelIndex = levels.indexOf(prevLevel) + 1;
    if (nextLevelIndex < levels.length) {
      grade.splice(nextLevelIndex, 0, { [levels[nextLevelIndex]]: value });
      console.log("Grade updated successfully.");
      await AsyncStorage.setItem(KEY, JSON.stringify(grade));
      return;
    }
  } catch (e) {
    // saving error
  }
};

export const getGrades = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(KEY);
    console.log("Retrieved successfully");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const updateGrades = async (grades) => {
  try {
    await AsyncStorage.clear();
    await AsyncStorage.setItem(KEY, JSON.stringify(grades));
    console.log("Updated successfully");
  } catch (e) {
    // saving error
  }
};

export const clearGrades = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log("Done.");
};
