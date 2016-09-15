function enterName () {
    var arr = new Array(5);
    for (i = 0; i < 5; i++) {
        arr[i] = prompt("Введіть ім'я");
    }
    var userName=prompt("Введіть ім'я користувача");
    for (i = 0; i < arr.length; i++) {
        if (arr[i]==userName) {
           var validName=userName;
        } 
    }

    if (validName !=undefined) {
        alert(validName+", ви успійшло ввійшли в систему");
    } else {
        alert("Введене ім'я недійсне");
    }
}
enterName();





