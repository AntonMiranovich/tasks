// 7. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

function check() {
    let count = '';
    return function check2() {
      count += 'Anton ';
      console.log(count);
    };
  }
  
  let countResult = check();
  
  countResult();
  countResult();
  countResult();