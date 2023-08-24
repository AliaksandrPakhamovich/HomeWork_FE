
// const numbers = document.querySelector('.numbers');

// for (let i = 100; i >= 50; i -= 10) {
//   const paragraph = document.createElement('p'); 
//   paragraph.textContent = i; 
//   numbers.appendChild(paragraph); 
// };



// const stringArray = ['Я', 'Хочу', 'Есть', 'И', 'Спать'];
// const stringContainer = document.querySelector('.string_container');

// for (let i = 0; i < stringArray.length; i++){
//     const paragraph = document.createElement('p');
//     paragraph.textContent = stringArray[i];
//     stringContainer.appendChild(paragraph);
// }







let users = [
    {first_name: "Aliaksandr", last_name: "Pakhamovich", age:27},
    {first_name: "Ivan", last_name: "Sidorov", age:17},
    {first_name: "Alex",  last_name: "Smith", age:14},
    {first_name: "John",  last_name: "Malcovich", age:47} 
    ];

const usersContainer = document.querySelector('.users_container');

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    
    if (user.age >= 18) {
        let userCard = document.createElement('div');
        userCard.classList.add('user_card');
        
        userCard.textContent = `Имя: ${user.first_name}, Фамилия: ${user.last_name}, Возраст: ${user.age}`;
        
        usersContainer.appendChild(userCard);
    }
}

