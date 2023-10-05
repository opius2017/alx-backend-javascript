const getStudentIdsSum = (students) => students.reduce((acc, student) => acc + student.id, 0);

export default getStudentIdsSum;
