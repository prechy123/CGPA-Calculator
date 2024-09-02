import AsyncStorage from "@react-native-async-storage/async-storage";

const levels = [
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

export const storeGrades = async (value) => {
  try {
    const retrievedGrade = await AsyncStorage.getItem("Grades");
    const grade = retrievedGrade != null ? JSON.parse(retrievedGrade) : null;
    if (grade === null) {
      const jsonGrade = JSON.stringify([{ "1001st": value }]);
      await AsyncStorage.setItem("Grades", jsonGrade);
    } else {
      // fix issue later
      // for (level in levels) {
      //   console.log(level)
      //   const keys = Object.keys(grade);
      //   console.log("keys:",keys)
      //   if (keys.includes(level)) {
      //     grade.push({ [levels[grade.length]]: value });
      //     await AsyncStorage.setItem("Grades", JSON.stringify(grade));
      //     return;
      //   }
      // }
    }

    console.log("Stored successfully");
  } catch (e) {
    // saving error
  }
};

export const getGrades = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("Grades");
    console.log("Retrieved successfully");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
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
