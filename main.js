// first task👇
// const fs = require('fs').promises;
// async function main(){
//     try{
//         const fetch = (await import('node-fetch')).default;
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();
//         const filteredusers = users.map(user => ({
//             id: user.id,
//             name: user.name,
//             username: user.username,
//             email: user.email
//         }))
//         await fs.writeFile('output.txt', JSON.stringify(filteredusers,null,2))
//         console.log("wrote successfully");   
//     }
//     catch(e){
//         console.log(e,"err"); 
//     }
// }
// main();



// second task 👇
// const fs = require('fs').promises;
// const [,,make,year,color] =process.argv;
// async function main(){
//     try{
//         const car = {
//                         id: Date.now(),
//                         carModel: make,
//                         carReleaseDate: year,
//                         carColor: color
//                     }
//         let cars =[];
//         const readdata = await fs.readFile('cars.json','utf-8');
//         cars = JSON.parse(readdata);
//         cars.push(car);
//         await fs.writeFile('cars.json',JSON.stringify(cars,null,2));
//         console.log("wrote successfully");
//     }
//     catch(e){
//         console.log(e,"err");
//     }
// }
// main();



// task third 👇
// const fs = require('fs').promises;
// async function main(){
//     try{
//         const readdata = await fs.readFile('text.txt','utf-8');
//         const vowels = 'aeiouAEIOU';
//         let vowelcount =0;
//         for(let char of readdata){
//             if(vowels.includes(char)){
//                 vowelcount++;
//             }
//         }
//         console.log(vowelcount,"vowels");
//     }
//     catch(e){
//         console.log(e,"err");
//     }
// }
// main();