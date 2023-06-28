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

const objectsDOM = parser.parseFromString(objects, "text/xml");;

const student = objectsDOM.querySelector("student")
const name = student.querySelector("name")
const firstName = student.querySelector("first")
const secondName = student.querySelector("second")
const age = student.querySelector("age")
const prof = student.querySelector("prof")

const langAtt = name.getAttribute("lang")

const result = {
    firstName: firstName.textContent,
    secondName: secondName.textContent,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: langAtt
}

console.log(`name: ${result.firstName} ${result.secondName}, age: ${result.age}, prof: ${result.prof}, lang: ${result.lang}`)
