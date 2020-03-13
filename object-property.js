const students = [
    {id: 21, name:'Mirza'},
    {id: 9, name:'Sonia'},
    {id: 31, name:'Manna'},
    {id: 41, name:'Deep'},
];
// const output = [];

// for(let i=0; i<students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
    
// }
// console.log(output);

// const names = students.map(s => s.name);
// console.log(names);

// const ids = students.map(s => s.id);
// console.log(ids);

//filter
const biggerId = students.filter(s => s.id > 20);
console.log(biggerId);

const biggerIdOne = students.find(s => s.id);
console.log(biggerIdOne);