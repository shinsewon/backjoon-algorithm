const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


function solution(items) {
    const num = +items[0]

    for(let i=1; i<=num; i+=1){
        let count = sum =0;
        for(let j=0; j<items[i].length; j++){
            if(items[i][j]==='O'){
                count+=1
            }else{
                count =0
            }
            
            sum +=count
    
        }
    }
}


solution(input);


