var number = prompt("Введіть число, яке необхідно піднести до степіня");
if (typeof number == number) {
	console.log(" число=", number);
	var pow = prompt("Введіть ступінь, до якого необхідно піднести число");
	console.log(" степінь=", pow);
	var result;//Змінна, в яку буде записуватись результат
	exponentiation(number, pow);
} else {
	alert("Введіть дійсні числа");
}



function exponentiation(number, pow) {
  if (pow > 0) {
    result = number;

    for (var i = 0; i < pow-1; i++) {
	  result = number*result;
    }

    console.log(result);

  } else if (pow === 0) {
	  result=1;
	  console.log(result);

  } else if (pow < 0) {
	  result=1/(number);

	  for (var i = -1; i > pow; i--) {
	    result = result/number;
      }

      console.log(result);
    }
  }




