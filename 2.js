const json =

{
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
}

   const data = JSON.perse(json);
   const list = data.list;

   const result = {
    name: list.name,
    age: list.age,
    prof: list.prof
   }

   console.log(result)S