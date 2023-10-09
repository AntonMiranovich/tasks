// Вы вводите числа в поле для ввода формируя и отображая массив. 
// Необходимо также отображать только уникальные значения массива 
// [1, 1, 4, 2, 3, 3] -> [4, 2]

const btn = document.querySelector('button');
const array = [];

btn.addEventListener('click', () => {
    const inp = document.querySelector('input');
    const arr = document.querySelector('.arr');
    const uniq = document.querySelector('.uniq');

    array.push(inp.value);
    inp.value = '';
    arr.innerHTML = array;

    const new_arr = [];
    for (let i = 0; i < array.length; i++) {
        if (!new_arr.includes(array[i])) {
            new_arr.push(array[i]);
        }
    }
    uniq.innerHTML = `уникальный массив ${new_arr}`;
})