const arr = [
  {
    id: "javascript",
    label: "JavaScript",
    category: "programmingLanguages",
    priority: 1,
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "programmingLanguages",
    priority: 1,
  },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  {
    id: "firebasestorage",
    label: "Firebase Storage",
    category: "databases",
    priority: 2,
  },
  {
    id: "ibmcloudant",
    label: "IBM Cloudant",
    category: "databases",
    priority: 2,
  },
  { id: "react", label: "React", category: "webTechnologies", priority: 1 },
  {
    id: "angularjs",
    label: "ANGULARJS",
    category: "webTechnologies",
    priority: 1,
  },
  { id: "redux", label: "Redux", category: "webTechnologies", priority: 1 },
  {
    id: "materialui",
    label: "Material UI",
    category: "webTechnologies",
    priority: 1,
  },
  { id: "git", label: "Git", category: "otherSkills", priority: 2 },
  {
    id: "adobephotoshop",
    label: "Adobe Photoshop",
    category: "otherSkills",
    priority: 2,
  },
];

function getData() {
  if (arr.length == 0) throw new Error("ваш массив пуст");
  return arr;
}

function getDataById(id) {
  if (arr.length == 0) throw new Error("ваш массив пуст");
  const newObj = arr.filter((el) => el.id == id);
  return newObj;
}

function postData(label, category, priority) {
  const newObj = {
    id: label.toLowerCase(),
    label: label,
    category: category,
    priority: priority,
  };
  const filtered = arr.filter((el) => el.id != newObj.id);
  if (filtered.length != arr.length)
    throw new Error("в массиве уже есть такой id");

  arr.push(newObj);
  return arr;
}

function putData(id, label, category, priority) {
  const newObj = {
    id: id,
    label: label,
    category: category,
    priority: priority,
  };
  const filtered = arr.filter((el) => el.id != newObj.id);
  if (filtered.length == arr.length) throw new Error("в массиве нет такого id");
  filtered.push(newObj);
  return filtered;
}

function deleteData(id) {
  const filtered = arr.filter((el) => el.id != id);
  if (filtered.length == arr.length)
    throw new Error("в массиве не найдено такого id");
  return filtered;
}

module.exports = { getData, getDataById, postData, putData,deleteData };
