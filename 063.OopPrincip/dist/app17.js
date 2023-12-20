// 17. Создайте абстрактный класс MusicalInstrument, представляющий музыкальный
// инструмент. У класса MusicalInstrument должен быть метод play, который будет
// воспроизводить звук инструмента. Создайте классы-наследники Guitar, Piano и
// Drums, которые будут представлять гитару, пианино и ударные соответственно.
// Реализуйте метод play для каждого класса, воспроизводя соответствующий звук
// инструмента. Создайте несколько объектов классов Guitar, Piano и Drums и
// вызовите метод play для каждого инструмента
class MusicalInstrument {
    play() {
        console.log("Play");
    }
}
class Guitar extends MusicalInstrument {
    play() {
        super.play();
        console.log("Guitar");
    }
}
class Piano extends MusicalInstrument {
    play() {
        super.play();
        console.log("Piano");
    }
}
class Drums extends MusicalInstrument {
    play() {
        super.play();
        console.log("Drums");
    }
}
const guitar = new Guitar();
const piano = new Piano();
const drums = new Drums();
guitar.play();
piano.play();
drums.play();
