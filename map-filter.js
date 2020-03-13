const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i =0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

// console.log(output);


// const square = x => x * x;

// const result = numbers.map(function(x){
//     return x*x;
// })
// console.log(result);


// const result = numbers.map(x => x*x);
// console.log(result);


//map er bhai brother filter(note: ekhane jodi sob chite choto er chaite dhoro ei arrey te 3 er choto chaile faka ekta dekhabe atai filter)
// const bigger = numbers.filter(x => x < 5);
// console.log(bigger);

//map er bhai brother find sudhu matro ekta dekhabe
const isTheir = numbers.find(x => x > 5);
console.log(isTheir);