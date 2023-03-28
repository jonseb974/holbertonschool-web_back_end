export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.city === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentID === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
