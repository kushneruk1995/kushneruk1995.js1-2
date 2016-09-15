function enterName() {
  //створюємо масив з 5 елементів
  var arr = new Array(5);
  //Циклом заповнюємо масив іменами
  for (i = 0; i < arr.length; i++) {
    arr[i] = prompt("Введіть ім'я");
  }
  
  var userName = prompt("Введіть ім'я користувача");
  //Перевірка на відповідність введеного ім'я користувача з іменами в масиві
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == userName) {
      //Якщо ім'я в масиві співпадає з іменем користувача, воно записується у змінну validName
      var validName = userName;
    } 
  }
  //Якщо ім'я користувача співпало, відповідно змінна validName не буде undefined, в іншому випадку введене ім'я недійсне
    if (validName != undefined) {
    alert(validName + ", ви успійшло ввійшли в систему");
  } else {
    alert("Введене ім'я недійсне");
  }
}
enterName();





