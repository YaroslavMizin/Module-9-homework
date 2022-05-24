// // Задание 1

const xmlStudents = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

// экземпляр парсера
const parser = new DOMParser();

// парсим XML
const studentsXmlDOM = parser.parseFromString(xmlStudents, "text/xml");

// получение DOM
const studentNode = studentsXmlDOM.querySelectorAll("student");

let result = {
    list: []
};

for (let i = 0; i < studentNode.length; i++) {
    let firstName = studentNode[i].querySelector("first");
    let secondName = studentNode[i].querySelector("second");
    let age = studentNode[i].querySelector("age");
    let prof = studentNode[i].querySelector("prof");
    // данные из атрибутов
    let lang = studentNode[i].querySelector("name").getAttribute("lang");

    let studentData = {
        name: `${firstName.textContent} ${secondName.textContent}`,
        age: Number(age.textContent),
        prof: prof.textContent,
        lang: lang
    }
    result.list.push(studentData);
}

console.log(result);

// // Задание 2

const jsonString = `{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`

const data = JSON.parse(jsonString);
console.log(data);