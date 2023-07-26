// 4. Напишите функцию, которая принимает
// статичный массив строк. Необходимо
// отфильтровать значения и оставить только те,
//где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] ->
//[“by”, “de”, “ru”]

const arr = ["by", "belarus", "de", "ru", "germany"];

function doFilter(array) {
  let arr2 = array.filter(function (el) {
    return el.length < 3 ? true : false;
  });
  return arr2;
}

let result = doFilter(arr);

console.log(result);
