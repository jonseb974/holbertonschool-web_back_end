export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.city === city)
    .map((student) => {
      const findGrade = newGrades.find((newGrade) => newGrade.studentID === student.id);
      return { ...student, grade: findGrade ? findGrade.grade : 'N/A' };
    });
}
