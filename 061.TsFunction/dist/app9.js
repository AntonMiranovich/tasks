// // Напишите код, который сделает из массива объект
// // [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
const arr9 = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];
function test(arr9) {
    let obj9 = {};
    for (let i = 0; i < arr9.length; i++) {
        obj9[arr9[i].name] = arr9[i].value;
    }
    return obj9;
}
console.log(test(arr9));
