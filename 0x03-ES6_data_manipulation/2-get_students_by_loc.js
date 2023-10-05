const getStudentsByLocation = (list, city) => list.filter((arr) => arr.location === city);

export default getStudentsByLocation;
