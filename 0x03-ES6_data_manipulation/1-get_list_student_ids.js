const getListStudentIds = (list) => {
  if (Array.isArray(list)) {
    return list.map((arr) => arr.id);
  }
  return [];
};

export default getListStudentIds;
