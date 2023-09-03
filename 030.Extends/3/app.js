// 3. Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
// Worker состоит из: свойства name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname, years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo через класс Singer

class Worker {
  name;
  surname;
  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  setName(name) {
    this.name = name;
  }

  setSurname(sur) {
    this.surname = sur;
  }
}

class Singer extends Worker {
  years;
  birth;
  style;
  getMoreInfo() {
    return `${this.name} ${this.surname} ${this.years} ${this.birth} ${this.style} `
  }

  setYears(ye) {
    this.years = ye;
  }

  setBirth(bir) {
    this.birth = bir;
  }

  setStyle(st) {
    this.style = st;
  }
}

const singer = new Singer();
singer.setName("Anton");
singer.setSurname("Miranovich");
singer.setYears(30);
singer.setBirth("07.10.1992");
singer.setStyle("rock");

console.log(singer.getFullName());
console.log(singer.getMoreInfo());