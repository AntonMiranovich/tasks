// 12. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100.

function check() {
    let count = 0;
    return function check2() {
      count = Math.floor(Math.random() * 100);
      console.log(count);
    };
  }
  
  let countResult = check();
  
  countResult();
  countResult();
  countResult();


