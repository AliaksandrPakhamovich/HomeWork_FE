// let d = 7;
// console.log('Значение = ' + d);
// console.log('Значение в квадрате = ' +d**2);
// console.log('Значение в кубе = ' + d**3);



// let  number = prompt('Введите целое число:');
// if (number > 0 ){
//     let number2 = number * 2;
//     console.log('Ваше значение: ' + number2);
// } else{
//     console.log('Введенное не положительное число.');
// }


// let num1 = Number(prompt('Введите первое целое число:'));
// let num2 = Number(prompt('Введите второе целое число:'));
// if (num1 > num2){
//     let sum = num1 + num2;
//     console.log('Сумма чисел:' + sum);
// } else if(num1 < num2){
//     let product = num1 * num2;
//     console.log('Произведение чисел:' + product);
// }else{
//     console.log('Числа одинаковые');
// }


// let num = Number(prompt('Введите целое число:'));
// if(num < 0){
//     let num1 = num**2;
//     console.log('Число в квадрате: ' + num1);
// }else{
//     console.log('Ошибка');
// }


let students = Number(prompt('Введите количество учеников:'));
let chairs = Number(prompt('Введите количество стульев в классе:'));

if(students <= chairs){
    console.log('Стульев хватает.');
}else{
    console.log('Стульев не хватает.');
}




