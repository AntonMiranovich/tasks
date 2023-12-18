// 8. Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics
class PasswordGenerator {
    generatePassword(a) {
        if (typeof a == "number") {
            let password = [];
            for (let i = 0; i < a; i++) {
                password.push(Math.floor(Math.random() * 10));
            }
            return password.join("");
        }
    }
}
const passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword(8));
