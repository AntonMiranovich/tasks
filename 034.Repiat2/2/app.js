// Вы вводите числа в поле для ввода формируя массив. Необходимо 
// отобразить массив, а также отдельно все четные элементы этого 
// массива и нечетные

const btn = document.querySelector('button');
const array = [];
btn.addEventListener('click', () => {
    const inp = document.querySelector('input');
    const arr = document.querySelector('.arr');
    const chet = document.querySelector('.chet');
    const nechet = document.querySelector('.nechet');

    
    array.push(inp.value);
    inp.value = '';
    arr.innerHTML = array;
    

    let chetArr = [];
    let nechetArr = [];

    array.forEach((el) => el % 2 === 0 ? chetArr.push(el) : nechetArr.push(el));

    chet.innerHTML = `чётное значение ${chetArr}`;
    nechet.innerHTML = `нечётное значение ${nechetArr}`;
})