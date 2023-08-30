// 1. Реализуйте класс Singer, который будет иметь
//  следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph,
//  который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.

class Singer {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getAutograph() {
    return `${this.name} ${this.surname} с наилучшими пожеланиями`;
  }
}

const singer = new Singer("Anton", "Miranovich");
console.log(singer.getAutograph());
