const a = {
    name: 'Janek',
    age: 30,
}

//kopiowanie nieprawidłowe
// const b = a;
// console.log(a, b);
// w const a mamy referencję, e w szufladzie w biurku jest ten obiekt a, a w const b mamy referencję do tej samej szuflady, więc jak zmienimy coś w a, to zmienimy to samo w b, bo obiekt jest ten sam, tylko referencja inna
// b.name = 'Marek';
// console.log(a, b);

const b = {
    ...a,
    nastName: 'Nowak',
    age: 40,
}
// spread operator ... - rozwijamy obiekt a, tworzymy nowy obiekt b, który ma te same właściwości co a, ale jest to nowy obiekt, więc jak zmienimy coś w a, to nie zmienimy tego samego w b
// tutaj wyświetli się age = 40, bo nadpisaliśmy wartość age
// console.log(a, b);

const tablica = [1, 2, 3, 4, 5];
const tablica2 = [9,...tablica, 6, 7, 8];
//kopiowanie pierwszej tablicy i dopisywanie do niej nowych elementów

// 1. Utwórz zmienna "firstTab" która będzie przechowywać listę trzech
// liczb
// 2. Następnie utwórz drugą tablice "secondTab" do której przypiszesz
// drugą tablice, tym razem pustą ([])
// 3. Korzystając z jednej z metod tablicowych (iterujących) przekopiuj
// tablice firstTab do secondTab za pomocą metody która dopisuje
// element na koniec tablicy
// 4. Rozwiąż ten problem szybszym sposobem – spread operator

const firstTab = [1, 2, 3]; 
// Korzystając z jednej z metod tablicowych (iterujących) przekopiuj
// tablice firstTab do secondTab za pomocą metody która dopisuje
// element na koniec tablicy
// firstTab.forEach((element) => secondTab.push(element));
const secondTab = [...firstTab];
// console.log(secondTab);

//zakres funkcji i zmiennych (scope)
// const - globalny zakres, w pliku mamy dostęp do tych zmiennych
// -lokalny  zakres
//const getVariable = () => {
    // const a = 10;
    // console.log(a);
    //console.log(b);
    //}
    // tu mamy jeszcze dostęp do b, ale globalnie nie do a, a jest tylko wewnątrz funkcji, a dospęp do b mamy wszędzie, bo wynika to z wywołania funkcji

    //słówko kluczowe this - odwołuje się do obiektu, w którym jest wywoływane, w reacie tego nie uywamy, bo mamy inne rozwiązania, ale w innych językach tak
    // tak jakbysmy palcem na cos wskazywali, wskazujemy na obiekt, w którym jesteśmy, nie nadajemy mu wartości, tylko wskazujemy na obiekt, w którym jesteśmy
    // moze wskazywać na jakąs klasę w obiekcie, na obiekt, na funkcję, na coś, co jest w obiekcie
    // szuka w hierarchi naszego kodu pierwszego obiektu i do niego się odnosi
    // w funkcji strzałkowej nie ma  this
    // klasy mają this, ale funkcje strzałkowe nie
    // klasa to zbiór klas i metod, kada metoda jest funkcją i kada funckka jest metodą
    // jezeli funkcja w klasie, to mówmy, e jest to metoda, a nie funcka

    // składnia klasy
    // class NazwaKlasy { kada klasa z wielkiej litery
    //     constructor() {
    //         this.name = 'Janek';
    //     }
    // tworzymy pola obiektu w konstuktorze

    // metody w klasie
    //     sayHi() {
        // alert(this.name);
                //         nazwwa i deklaracja metody
        // klasa to taka duza funkcja, w której mamy pola i metody
      // to samo funckcją strzałkową
// sayHi = () => {alert(this.name)}

// let user = new User("john");
// słówko kluczowe new - tworzy nowy obiekt na podstawie klasy, wywołuje nam konstruktor, tworzy nowy obiekt na podstawie klasy
// alert to taki pop.up, który wyświetla się na stronie, komunikat
// alert('hello'); albo e sie cos nie odpali
//toastify.js taka strona, gdzie mamy różne komunikaty, które możemy wyświetlać na stronie a formie alertow, fajnie skorzystać, stamtąd mona sobie ściągnąć kod i dać do diva, a potem wywołać funkcję, żeby się wyświetlił komunikat

// zadanie 1 Utwórz Klase User do którego przez konstruktor przekazujemy email i hasło, utwórz obiekt user1 na bazie klasy User
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
let user1 = new User('aki@gmail.com', '1234');
// console.log(user1);

// metody w klasie
//     deklaracja metody w js nie ma problemu z thisem, ale w reacie będzie
// class Person {
    // number = 0; - ta linijka nie jest potrzebna, bo w konstruktorze mamy to samo
    // constructor(number) {
//         this.number = number;
// }
// pierwszy sposób dodawania metody
// add() {
    // this.number = this.number + 1;
    // drugi sposób dodwania metody
//multuply = (a, b) => {
//     this.number = this.number * a * b;
// }}
// const person1 = new Person(1);
// person.add();
// person.multuply(2, 3);

// konstruktor to taka funkcja, która jest wywoływana, kiedy tworzymy nowy obiekt na bazie klasy, nie ma korelacji miedzy konstruktorem a metodą

// zadanie 1. Utwórz klase Animal
// 2. Dodaj pusty konstruktor
// 3. Utwórz stan korzystając jednego z dwóch sposobów - stan zawiera
// pola: name i age
// 4. Utwórz dwie metody "giveVoice" - która mowi jak ma na imie w
// konsoli oraz "growUp" - która podnosi wiek
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    giveVoice = () => {
        console.log(this.name);
    }
    grwUp = () => {
        this.age = this.age + 1;
        console.log(this.age);
    }
    // giveVoice() {
    //     console.log(this.name);
    // }
    // growUp() {
    //     this.age = this.age + 1;
    // }
}
const Animal1 = new Animal("Kornel",15);
Animal1.giveVoice();
Animal1.grwUp();
console.log(Animal1);

// nazewnictwo this._name = name to oznacza, e to jest prywatne pole, nie powinno się zmieniać, ale można, ale nie powinno, to jest konwencja, żeby nie zmieniać
// this.# to oznacza ze dostęp do tego pola jest tylko wewnątrz klasy, nie można zmieniać tego pola z zewnątrz klasy, to jest nowa funkcjonalność w js, nie jest jeszcze w pełni zaimplementowana, ale jest już dostępna w niektórych przeglądarkach, sygnalizyjemy innym programistom, aby nie znieniali jej, bo nie powinni, ale mogą, ale nie powinni

//dziedziczenie w klasach
// z klasy animal mozemy dziedziczyć do klasy osoba age, bo pies i osoba mają wiek
// trzeba uyć słuwka super, aby dostać dostęp do konstruktora klasy nadrzędnej number, np
// super(number) w konstrukorze klasy dziedziczącej
// class Vehicle {
//     constructor(hp) {
//         this.horsePower = hp;
//     }
//     turnOn = () => {
//         console.log('hp: ${this.horsePower} ON');
//     }
// }
// class Car extends Vehicle {
//     constructor(hp, color) {
//         super(hp);
//         this.color = color;
//     }
//     //nadpisanie klasy z metody Vehicle
//     giveVoice = () => {
//         console.log('jestem autem koloru ${this.color} i mam ${this.horsePower} koni mechanicznych');
//     };
//     }
// const car = new Car(100, 'red');
// car.giveVoice();
// console.log(car.color);

class Dog{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    giveVoice = () => {
        console.log("hau hau");
    }
};
const dog = new Dog('Burek', 2);
dog.giveVoice();
console.log(dog);

class Cat extends Dog{
    constructor(name, age) {
        super(name, age);
    }
    giveVoice = () => {
        console.log("miau miau");
    }
};
const cat = new Cat('Filemon', 3);
cat.giveVoice();
console.log(cat);







