const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(items) {
    const average = +items[0]
    const newValues = items[1].split(' ').map(item => +item)
    const max =Math.max(...newValues)
    const result =  newValues.reduce((acc,cur)=>{
        const value = (cur/max)*100
       return acc+value
    },0)
    console.log(result/average)

}
solution(input);


