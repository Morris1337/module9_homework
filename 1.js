const parser = new DOMParser();

const objects = 
`<list>
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

const objectsDOM = parser.parseFromString(objects, "text/xml");

const studentElements = objectsDOM.getElementsByTagName("student");

const studentList = [];

for(let i = 0; i < studentElements.length; i++){
const studentElement = studentElements[i];

  const name = studentElement.querySelector("name");
  const firstName = name.querySelector("first").textContent;
  const secondName = name.querySelector("second").textContent;
  const age = parseInt(studentElement.querySelector("age").textContent);
  const prof = studentElement.querySelector("prof").textContent;
  const lang = name.getAttribute("lang");

const student = {
    name: `${firstName} ${secondName}`,
    age,
    prof,
    lang
};
studentList.push(student);
}
console.log(studentList);