// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const strHtml = `    <header>
<div class="logo"></div>
<nav>
    <p>
        <a href="../pages/index.html">Work</a>
    </p>
    <p>
    <!--this is parragraf1-->
        <a href="../pages/abaut.html">About</a>
    </p>
    <p>
    <!--this is parragraf2-->
        <a href="https://github.com/AntonMiranovich">Playground</a>
    </p>
    <p>
    <!--this is parragraf3-->
        <a href="../pages/contact.html">Contact</a>
    </p>
</nav>
</header>
`;

function strReplace(str) {
  try {
    let newStrHtml = str.replaceAll(/^<!--[\w.\s]+-->$/gm, '');
    return newStrHtml;
  } catch (error) {
    return error;
  }
}

const resultStr = strReplace(strHtml);
console.log(resultStr);
