const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


// function solution(items) {
// let firstNumber =1
// let secondNumber =1

// const arr =[]
// const result = []
// const answer=(number)=>{
//     const numArr = number.toString().split('') 
//     for(let i=0; i<numArr.length; i+=1){
//         if(numArr.length===1) number = Number(numArr[i])
//         else number +=Number(numArr[i]) 
//     }
//     arr.push(number)
//     num=0
// }

// do{
//     answer(firstNumber)
//     firstNumber +=1
// }while(100>=firstNumber)

// const set = new Set(arr)
// const uniqueArr = [...set]
// const test =(num)=>{
//     const numArr = num.toString().split('') 
//     for(let i=0; i<numArr.length; i+=1){
//         if(numArr.length===1) num = Number(numArr[i])
//         else num +=Number(numArr[i]) 
//     }
//     uniqueArr.find((item)=>{
//         if(item !== num){
//             result.push(num)
//         }
//     })
// }

// do{
//     // console.log('items2>>>',items)

//     // console.log('uniqueArr>>>',uniqueArr)
//     test(secondNumber)
//     secondNumber +=1
// }while(100>=secondNumber)
// console.log('result>>>',result)
// }

function solution(n) {
    let number = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
        // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
        result += number % 10;
        number = Math.floor(number / 10);
    }
    // 입력받은 수 와 result를 더하여 return
    return n + result;
}

const range = 10000;
// 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
    // 셀프넘버가 아니면 false로 변환.
    selfNumbers[solution(i)] = false;
}

// true index만 출력
for (let i = 0; i < range; i++) {
    if (selfNumbers[i]) {
        // console.log(i);
    }
}



// solution(1000);


