export function totalUnits(scores) {
  let total = 0;
  for (let score of scores) {
    total += parseInt(score.unit);
  }
  return total;
}
export function myPoints(scores) {
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
function totalPoints(scores) {
  let total = 0;
  for (let score of scores) {
    total += parseInt(score.unit);
  }
  return total;
}
export default function gradePoint(scores) {
  let total = 0;
  if (totalPoints(scores) === 0) {
    return total;
  }
  total = myPoints(scores) / totalPoints(scores);
  return total.toFixed(2);
}

export function myCgpa(scores) {
  const allScore = scores.flatMap((score) => Object.values(score).flat());
  const cgpa = gradePoint(allScore);
  console.log(cgpa);
  return cgpa;
}
