// bài 4
// var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     ctx.fillRect(10,10,200,100);
//bài 2
function tryRemoveFromArray(arr, index){
    let newArr = [];
    if(index < arr.length){
        for (const i in arr) {
            if (i != index){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }else if(index < 0){
        return arr;
    }
    else {
        return arr;
    }
}
let a = [1, 2, 3, 4];
let b = 1;
console.log(tryRemoveFromArray(a,b))

//bài 1
// let arr = [1,2,3,4,5,6,7,8];
// function findPoints(arr){
//     let temp = "";
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr[5];
// }
// document.write(arr[5])
// bài 3

// function string(str1, str2) {
//     let le1 = str1.length;
//     let le2 = str2.length;
//     if (le1 > le2) {
//         return false;
//     }
//     for (let i = 0; i <= le2 - le1; i++) {
//         let match = true;
//         for (let j = 0; j < le1; j++) {
//             if (str2[i + j] !== str1[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) {
//             return true;
//         }
//     }
//     return false;
// }
// let str11 = "dog";
// let str22 = "catdog";
// let result = string(str11, str22);
// console.log(`Chuỗi "${str11}"  thộc chuỗi "${str22}" không? ${result}`);










