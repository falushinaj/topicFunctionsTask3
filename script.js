"use strict"

function worker2(arr) {
    let min = Infinity, 
    max = -Infinity,
    dif = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } 
        if (arr[i] > max) {
            max = arr[i];
        }   
    }
    dif = Math.abs(max - min);
    return dif;
}

function makeWork(arrOfArr,func) {
 let max = -Infinity,
     min = Infinity;
 for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
        max = func(arrOfArr[i]);
    }; 
    if (func(arrOfArr[i]) < min) {
        min = func(arrOfArr[i]);
    }; 
};
return max;
};

const arrOfArr = [[-10, -20, -40], [10, 20, 30]];
console.log(makeWork(arrOfArr,worker2));