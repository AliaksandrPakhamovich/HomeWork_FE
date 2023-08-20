// console.log('Старт');
// for (let i = 1; i <= 9; i++){
//     console.log(i);
// }
// console.log('Финиш');


// for (let i = 10; i <= 99; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }



let numbers = [13, 34, 1, 78, 7, 3, -35, 48, -4 ];

// for ( let i = 0; i < numbers.length; i++){
//     if ( numbers[i] >= 15){
//         console.log(numbers[i]);
//     }
// }

// for (let i =0; i < numbers.length; i++){
//     if (numbers[i] %2 !==0 ){
//         console.log(numbers[i]);
//     }
// }

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(numbers[i]);
    }
}
