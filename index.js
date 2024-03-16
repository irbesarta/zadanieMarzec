
//wykład z 03 marca

console.log('Hello, World!');
const name = 'John Doe';
let age = 25;
console.log(name, age,);
// zwracaja tablice

// map => [] - sluzy do modyfikacji elementow w tablicy
const items = ["grabie", "szczotka", "grzebien", "durszlak"];
//utwórz funckę która przyjmuje jeden argument i wyświetla go w konsoli

const logItem = (item) => { 
  // console.log(item);
} 
// wykorzystaj powyszą funkcje do wyświetlenia "element" w konsoli

logItem("element")
//powyższe jest to samo co  logItem = (item) => console.log(item)
// powysza linijka wyświetli "element" w konsoli, bo wywołujemy funkcje logItem z argumentem "element"

//wykorzystaj powyszszą funkcje do wyświetlenia wszystkich elementów z tablicy items

items.forEach(logItem)
//powyższe jest to samo co  items.forEach((item) => console.log(item))
// powysza linijka wyświetli w konsoli wszystkie elementy z tablicy items

// stworz funkcje ktora przyjmuje tablice i zwraca nowa tablice z modyfikowanymi elementami których długość jest większa niż 6 znaków
// filter => [] - sluzy do przefiltrowawnia tablicy po warunku
// tablica.filter((element, index, array) => warunek{})
// daliśmy nazwę item, może być dowolna

const filteredItems = items.filter((item) => item.length > 6);
console.log("przefiltrowana tablica", filteredItems);

//for each => undefined
// tablica.forEach((element, index, array) => {})
//cosnt forEachItems = items.forEach((item) => console.log(item)); - tak nie mona, bo 
//ta metoda nie zwraca nic, nie modyfikuje lelementów w talbicy,ale nie jest to zalecane, bo jest to nieefektywne, lepiej użyć map. mona coś odczytać, sprawdzić, pobrać wartośc mona coś zpuschować do nowej tablicy, 
// 
// stwórz nową tablicę i dodaj do niej wszystkie elementy z tablicy items za pomocą funkcji strzalkowej


const secondTab = [];
items.forEach((item) => {
  // dzieki iteracji dodajemy kazdy element do nowej tablicy
  secondTab.push(item);
  // console.log(item);
});

// console.log("second tab", secondTab);
// tutaj uwaga - nie mona zrobić tak const items = ["grzebień", "grabie"]; const newItems = items.forEach((item) => newItems.push(item))}; console.log(newItems); bo forEach nie moe zwrócić tablicy

// reduce => wartosc - sluzy do sumowania wartosci w tablicy
// tablica.reduce((akumulator, element) => akumulator + element, wartosc_poczatkowa)
// stwórz funkcje która przyjmuje tablicę i zwraca sumę wszystkich elementów w tablicy

const sumItems = items.reduce((akumulator, element) => akumulator + element, "");
//akumulator to wartość, która jest aktualizowana i modyfikowana w trakcie iteracji, aby przechowywać stan pośredni wyniku.
// element to bieżący element przetwarzany w danej iteracji.
// console.log("suma elementow", sumItems);

// funkcje
// function nazwaFunkcji(parametry) { ciało funkcji }
//stwórz funkcje która przyjmuje dwa argumenty i zwraca ich sumę

function add(a, b) {
    return a + b;
}

// wywolanie funkcji - uruchomienie
// stwórz fzmienną, któ®a przyjmuje wartość sumy dwóch argumentó wykorzuystując funkcje strzałkową powyszą
// zwraca 5 i moemy te wartość przypisać do zmiennej

const addValue = add(2, 3);

// stwórz funkcje, która przyjmuje trzy argumenty i zwraca wynik dodawania dwóch pierwszych argumentów, a następnie dzielenie przez trzeci argument
// jeśli trzeci argument jest równy 0, to zwróć "Nie dziel przez zero"

function addAnd(a, b, c) {
    console.log(a + b) / c;
    if (c === 0) {
        return "Nie dziel przez zero";
    }
    return (a + b) / c;

}
// stwórz funkcję, która uywa funkcji addAnd, aby dodać dwa pierwsze argumenty, a następnie podzielić przez trzeci argument 

const newValue = addAnd(2, 3, 0);
console.log(newValue);
const newValue2 = addAnd(2, 3, 2);
console.log(newValue2);

// callback - funkcja wywołana wewnątrz innej funkcji, nie zwracamy wartosci, tylko wywołujemy funkcję
// funkcja wywołana wewnątrz innej funkcji, 
// () => {} - funkcja anonimowa
// (a, b) => {return a+b} - funkcja strzałkowa, zapis funcki srzałkowej bez uycia wyrazu functu=ion, jest ti nowszy zapis
// stwórz funkcje strzałkową anonimową, która przyjmuje dwa argumenty i zwraca obiekt z tymi argumentami
// i wywołaj te funckę z argumentami 3 i 4
const someFunction = (a, b) => {
    console.log(a + b);
    return a + b;
}
someFunction(2, 3);

const secondFunction = (a, b) => a + b;
someFunction(2, 3);
// jeśli nie ma nawiasów klamrowych, to to co po strzałce jest traktowane jako return

const otherFunction = (a, b) => ({});
// gdy zwracamy obiekt bez słówka return, musimy go zawinąć w nawiasy

// funkcja strzałkowa arrow function
// () => {} - funkcja anonimowa przypisana do zmiennej
// (a, b) => {return a+b} - funkcja strzałkowa
// teraz najczęściej używany zapis - nowszy zapis, dlatego uywamy strzałkowej
// stwórz funkcje strzałkową, która przyjmuje dwa argumenty i zwraca większy z nich - zrob na dwa sposoby z return i anonimowo

const biggerValue = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}
const result = biggerValue(2, 3);
console.log(result);
// operator trójkskładniokwy = jeśli true to coś, jeśli false to coś innego
const betterBiggerValue = (a, b) => (a > b ? a : b);
// to samo co wyżej, tylko zapisane w jednej linijce, zamiast if else, to operator trójargumentowy, tzw teranry operator
// jeśli a jest większe od b to zwróć a, w przeciwnym wypadku zwróć b
console.log(betterBiggerValue(2, 3));

//switch - instrukcja warunkowa, która pozwala na porównanie wartości zmiennej z wieloma innymi wartościami, to jest zamiennik if else, ale jest bardziej czytelny, gdy mamy wiele warunków
// switch (zmienna) { case wartość: instrukcja break; case wartość: instrukcja break; default: instrukcja break; }
// stwórz funkcję taką jak powyej uywając switch
// Switch statement jest przydatny, gdy mamy kilka możliwych wartości do porównania. Najczęściej jest używany, gdy chcemy zaimplementować instrukcje warunkowe na podstawie jednej wartości. Oto przykład prostego użycia switch statement w JavaScript:

function ocenZaliczenia(ocena) {
    let wynik;

    switch (ocena) {
        case 'A':
            wynik = "Bardzo dobry";
            break;
        case 'B':
            wynik = "Dobry";
            break;
        case 'C':
            wynik = "Dostateczny";
            break;
        case 'D':
            wynik = "Dopuszczający";
            break;
        case 'F':
            wynik = "Niedostateczny";
            break;
        default:
            wynik = "Nieznana ocena";
    }

    return wynik;
}

console.log(ocenZaliczenia('A')); // Wyświetli: "Bardzo dobry"
console.log(ocenZaliczenia('C')); // Wyświetli: "Dostateczny"
console.log(ocenZaliczenia('X')); // Wyświetli: "Nieznana ocena"
// Należy zauważyć, że każdy przypadek (case) musi zawierać instrukcję break, aby przerwać wykonywanie switch statement po dopasowaniu odpowiedniego przypadku.
// default w switch statement jest używany jako ostatnia opcja, gdy żaden z przypadków nie pasuje do wartości podanej w switch. Jest to rodzaj domyślnej gałęzi, która wykonuje się, gdy nie ma dopasowania do żadnego z pozostałych przypadków.

// W praktyce, default jest używane do obsługi wszystkich innych przypadków, które nie zostały wymienione w przypadkach (cases). Może to obejmować niepoprawne lub nieoczekiwane wartości, które nie pasują do spodziewanych przypadków, lub też po prostu obsługę wszystkich innych możliwych wartości, które nie są wymienione w przypadkach.

//obiekty 
// stwórz obiekt book z wartościami w których gatunek to tablica z trzema wartościami i wyświetl na koniec pierwszy gatunek z obiektu

const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    genres: ["fantasy", "magic", "adventure"],
    isPublic: true,
    rating: 4.5,
};
console.log(book.genres[0]);
// obiekt - zmienna, która przechowuje wiele wartości, które są zgrupowane w pary klucz-wartość
/// klucz: wartość
// klucz - nazwa właściwości, wartość - wartość właściwości
// obiekt = {}
// obiekt = { klucz: wartość, klucz: wartość, klucz: wartość }
// zmienna prywatna tylko do odczytu, nie można jej zmienić - ma chyba taki myślnik na początku lub na dole

const person = {
    name: "John",
    age: 25,
    lastName: "Doe",
    isMan: true,
};
//to cechy elementu, które są zdefiniowane jako właściwości obiektu
//odczyt danych stary styl

console.log(person.name, person.age);

//destrukturyzacja obiektu - wyciąganie właściwośsci z obiektu, obieranie owoców ze skóry:), to lepszy sposób wyświetlania
// const { co wyciagamy } = z czego wyciagamy;
const { name: personName, age: personAge, weight = 0 } = person;
// ale mona też zostawić te same nazwy, np const { name, age, weight = 0 } = person;
// wówczas name, age, weight to będą te same nazwy, co w obiekcie
// console.log(name, age, weight);
// weight = 0 - jeśli nie ma w obiekcie weight, to przypisz 0
console.log(personName, personAge, weight);
// zmień imię w obiekcie na Jane

person.name = "Jane";
console.log(person);
//zmiana wartości właściwości obiektu

// dodaj wartość do obiektu

person.nameee = "Jane";
// utworzenie nowej właściwości obiektu, bo jest literówka, więc nie zaktualizuje wartości, tylko doda nową właściwość
// pierwszy sposób na odczyt, zmianę i dodanie właściqwości - za pomocą kropki
// drugi sposób - za pomocą tablicy
// jak jest z myślnikiem, to trzeba za pomocą tablicy a nie z kropką
// console.log(person['person-id'], person.person-id);
console.log(person['person-id']);
person['age'] = 123;

//dodanie właściwości do obiektu
const input = {
    name: 'email',
    value: 'test@gmial.com',
}
person[input.name] = input.value;

// Tworzy obiekt input zawierający dwie właściwości: name i value.
// Właściwość name ma wartość 'email'.
// Właściwość value ma wartość 'test@gmial.com'.
// person[input.name] = input.value;:
// Przypisuje wartość właściwości input.value do właściwości o nazwie znajdującej się w input.name w obiekcie person.
// W tym przypadku input.name ma wartość 'email', więc to przypisanie jest równoważne z person['email'] = 'test@gmial.com'.
// Dzięki temu możemy elastycznie przypisywać wartości do właściwości obiektu, używając zmiennych jako kluczy.

person[input.name] = input.value;
//dodanie właściwości do obiektu
person['person-id'] = 'id-person';

//destrukturyzacja tablicowa => const [element1, element2, element3] = tablica;
const bigTab = ['Janek', 'Marek', 'Kasia', 'Basia'];
const [first, second, third, fourth] = bigTab;
// nadajemy wewnątrz nawiasów nowe nazwy dla elementów tablicy, jakie chcemy, wypisujemy te, które chcey wyciągnąć w kolejności, w jakiej są w tablicy
const [, , ,last] = bigTab;
// przecinek oznacza, że pomijamy elementy, które nie chcemy wyciągnąć, teraz do elementu Basia jest przypisana zmienna last oraz fourth
console.log(bigTab[70])

// stwórz funckję, która zwraca obiekt z dwoma właściwościami, jedna to tablica z trzema wartościami, a druga to liczba

const getState = (a, b) => {
    const value = 0;
    const tab = ['123', 2, 3];
    return [value, tab];
}

// stwórz zmienną która przyjmuje wartość zwróconą przez funkcję powyżej i wyświetl wartość pierwszej właściwości obiektu
const stateValue = getState();
console.log(stateValue[0], stateValue[1]);

// destrukturyzacja tablicowa, wyciąganie wartości z tablicy getState i wyświetlenie ich

const [firstItem, secondItem] = getState();
console.log(firstItem, secondItem);
// to chyba inny sposób na to samo

const getTab = (a, b, c, d, e) => {
    const value = 0;
    const tab = ['123', 2, 3];
    const tab2 = [5, 6, 7];
    const value2 = 10;
    const value3 = 20;
    return [value, tab, tab2, value2, value3];
}
const getTabValue = getTab();
console.log(getTabValue[0], getTabValue[3],);

const [firstValue, , , secondValue,] = getTab();
console.log(firstValue, secondValue,);

let a = {
    name: 'a'
  };
  let b = a;
  b.name = 'cc'
  
  // console.log(`a: ${a.name}, b: ${b.name}`);
  //W JavaScript, kiedy przypisujesz obiekt do zmiennej, to nie tworzy się nowy obiekt. 
  //Zmienna po prostu przechowuje referencję do tego samego obiektu, który jest przechowywany w pamięci. Innymi słowy, 
  //b i a wskazują na ten sam obiekt w pamięci.
//W wyniku tej operacji, obiekt, który jest referencjonowany przez zmienne a i b, teraz ma właściwość name ustawioną na string 'cc'.

//spread operator - operator rozwijania, pozwala na rozwinięcie tablicy lub obiektu, pozwala na kopiowanie tablicy lub obiektu, 
//pozwala na dodanie nowych elementów do tablicy lub obiektu  - ...nazwaTablicy
//Spread operator (...) w JavaScript jest używany do rozwijania elementów z iterowalnych struktur danych, takich jak tablice czy obiekty. Oto kilka przykładów jego użycia:
// kopiowanie tablicy:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

//W tym przypadku copiedObject będzie nowym obiektem, który ma te same właściwości i wartości co originalObject. Jest to prawdziwa kopia originalObject, a nie tylko referencja do niego. Oznacza to, że modyfikacje w copiedObject nie wpłyną na originalObject i odwrotnie.
//jesli dałabym 
// const originalObject = { name: 'John', age: 30 };
// const copiedObject = { originalObject };
// console.log(copiedObject);
//Tutaj copiedObject będzie obiektem, który ma tylko jedną właściwość, której kluczem będzie 'originalObject', a wartością będzie referencja do originalObject. 
// W rezultacie copiedObject nie jest kopią originalObject, a jedynie obiektem z jedną właściwością, która wskazuje na ten sam obiekt originalObject. 
// Modyfikacje w copiedObject będą miały wpływ na originalObject, ponieważ to wciąż ten sam obiekt.
// Podsumowując, użycie spread operatora pozwala na tworzenie prawdziwych kopii obiektów, 
// podczas gdy bez niego tworzysz obiekty, które wskazują na ten sam obiekt źródłowy.

// łączenie tablic:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//przekazywanie argumentów do funkcji:
const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // 5

//kopiowanie obiektu:
const originalObject = { name: 'John', age: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { name: 'John', age: 30 }

//łączenie obiektów:
const object1 = { name: 'John' };
const object2 = { age: 30 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { name: 'John', age: 30 }

//dodawanie nowych elementów do tablicy:
const newArray = [0, ...originalArray, 4];
console.log(newArray); // [0, 1, 2, 3, 4]

//Tworzenie nowych obiektów z modyfikacją istniejących właściwości:
const updatedObject = { ...originalObject, age: 40 };
console.log(updatedObject); // { name: 'John', age: 40 }

//Tworzenie nowych obiektów z dodaniem nowych właściwości:
const newObject = { ...originalObject, job: 'developer' };

// dom .nazwa_klasy #id lub nazwwa_znacznika
//mamy np input.email - to znaczy, że szukamy inputa z klasą email
// document.querySelector('.nazwa_klasy') - zwraca pierwszy element, który pasuje do selektora
const emailInput = document.querySelector('.email');
// console.log(document.querySelector('.email'));
//pierwszy sposób najlepszy, ten z document, bo nie trzeba pisać document, ale trzeba pamiętać, żeby dodać kropkę przed nazwą klasy, to jest nowszy sposób, nie trzeba szukac po id i class
const oldEmailById = document.getElementById('emailID');
const oldEmailByClass = document.getElementsByClassName('email');
console.log(emailInput.placeholder);
console.log(oldEmailById.placeholder);
console.log(oldEmailByClass[0].placeholder);
// pobieranie poprzez xPath - to jest najgorszy sposób, bo jest najwolniejszy, ale jest najbardziej precyzyjny, bo można wskazać dokładnie, gdzie jest element, ale jest najwolniejszy, bo musi przejść przez cały dokument, żeby znaleźć element
// console.log(document.evaluate('//input[@id="emailID"]', document, null, 7, null));
// console.log(document.evaluate('//html/body/div[1]//input', document)); tego raczej nie robimy, bo jest najwolniejszy

// właściwości atrybutow np w img mamy src i alt i to możemy odczytać w js, chcecked - wartosci boolean
// wartości classList - czyli lista klas, którą można odczytać, dodać, usunąć, sprawdzić, czy jest klasa
// elem.classList.add('nazwa_klasy') - dodanie klasy
// elem.classList.remove('nazwa_klasy') - usunięcie klasy
// elem.classList.contains('nazwa_klasy') - sprawdzenie, czy jest klasa
// elem.classList.toggle('nazwa_klasy') - dodaje klasę, jeśli jej nie ma, usuwa, jeśli jest
// elem.classList - zwraca listę klas, które są przypisane do elementu
// elem.classList.length - zwraca ilość klas, które są przypisane do elementu
// elem.classList.item(index) - zwraca klasę, która jest na danym indeksie
// elem.classList.replace(oldClass, newClass) - zamienia jedną klasę na drugą
// elem.classList.value - zwraca wszystkie klasy w postaci stringa
// elem.classList = 'klasa1 klasa2 klasa3' - nadpisuje wszystkie klasy na nowe
// elem.classList = '' - usuwa wszystkie klasy
// elem.classList = 'klasa1' - nadpisuje wszystkie klasy na nową
// elem.classList.replace('klasa1', 'klasa2') - zamienia jedną klasę na drugą

// style w js - pozwala na zmianę styli elementu
// elem.style.color = 'red' - zmiana koloru tekstu
//button.style.backgroundColor = 'blue' - zmiana koloru tła
// elem.style.fontSize = '20px' - zmiana rozmiaru tekstu
// elem.style.fontWeight = 'bold' - zmiana pogrubienia tekstu
// console.log(elem.style.color) - odczytanie koloru tekstu
// console.log(elem.style.backgroundColor) - odczytanie koloru tła
// console.log(button.style.fontSize) - odczytanie rozmiaru tekstu
const header = document.querySelector('#mainHeader');
header.style.fontSize = '80px';
console.log(header.style.fontSize);