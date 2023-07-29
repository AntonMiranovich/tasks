// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

function check() {
  let count = 0;
  return function check2() {
    count += 1;
    console.log(count);
  };
}

let countResult = check();

countResult();
countResult();
countResult();
