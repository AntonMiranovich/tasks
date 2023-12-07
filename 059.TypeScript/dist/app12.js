// 12. Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *
let strName = "anttoendwdqweqwc431231412412eqwdxwqcveabrramsekjr7uotiinuyn";
let alfav = "aeioyu";
let i = 0;
while (i < alfav.length) {
    if (strName.includes(alfav[i])) {
        strName = strName.replaceAll(alfav[i], "*");
    }
    i++;
}
console.log(strName);
