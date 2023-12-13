// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в getter, setter класса. Создайте
// экземпляр класса Student и выведите свойства.
class Student4 {
    name;
    age;
    setName(name_) {
        this.name = name_;
    }
    setAge(age_) {
        this.age = age_;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const student4 = new Student4();
student4.setName("Anton");
student4.setAge(31);
console.log(student4.getName());
console.log(student4.getAge());
