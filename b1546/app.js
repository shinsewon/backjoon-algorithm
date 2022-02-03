const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const items = input.map((item) => +item);


function solution(items) {
    const arr = []
  for(let i=0; i<items.length; i+=1){
      const number = items[i]%42
      if(!arr.includes(number)){
          arr.push(number)
      }
  }
  console.log(arr.length)
}
solution(items);


