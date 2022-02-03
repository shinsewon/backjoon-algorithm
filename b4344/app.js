const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(items) {
  const num = +items[0]
  for(let i=1; i<num+1; i+=1){
      let sum=answer =count=0
      const detailArray = items[i].split(' ').slice(1);
      const length = detailArray.length
      for(let j=0; j<length; j++){
        sum+=Number(detailArray[j])
      }
      sum =sum/length
        for(let k=0; k<length; k+=1){
            if(detailArray[k]>sum){
                count+=1
            }
        }

        console.log(`${((count/length)*100).toFixed(3)}%`)
  }
}
solution(input);



