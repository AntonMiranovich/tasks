// 4. Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.
class Account {
    balance = 0;
    deposit(el) {
        this.balance += el;
    }
    withdraw(el2) {
        this.balance -= el2;
    }
}
const account = new Account();
account.deposit(2000);
account.deposit(3000);
account.withdraw(1000);
console.log(account.balance);
