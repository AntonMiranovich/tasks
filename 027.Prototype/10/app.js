// 10. Разработчик запушил в главную ветку GitHub js файл с многострочными
// комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с
// кодом проделанной работы за спринт. Программисту необходимо вырезать все
// комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев
// используя регулярные выражения воизбежание публичного стыда.

const str = `
const a=20
const b=30
/* adwdawdwewqe asdaqw 
dsd12123@#$ sdad*&
EWRWERdsasdqw qweq */
const c=a+b
`;

function delCom(str) {
  const clearJsCode = str.replaceAll(
    /^\/\*[A-z0-9\/\*\!\@\#\$\%\^\&\(\) \-\.\n]+$/gm,
    ""
  );
  return clearJsCode;
}

console.log(delCom(str));
