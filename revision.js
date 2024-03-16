//zadania powtórzeniowe
//Zadeklaruj tablicę o nazwie "myAwesomeTab" zawierającą pięć elementów typu string.
// Następnie wyświetl drugi element tablicy w konsoli przeglądarki za pomocą destrukturyzacji tej
// tablicy.

console.log("zadania powtórzeniowe");
const myAwesomeTab = ["ja", "ty", "my", "wy", "oni"];
//detrukturyzacja, czyli wyciąganie wartości z tablicy, nadanie mu nowej nazwy
const [, secondValue] = myAwesomeTab;
console.log(secondValue);

//. Stwórz obiekt o nazwie "person" zawierający następujące pola: "name", "lastName", "age" i
// "hobbies" - pole tablicy z zainteresowawniamitypu string. Zainicjuj te pola odpowiednimi
// wartościami dla dowolnej osoby. Następnie wyświetl w konsoli przeglądarki wiek i
// zainteresowania tej osoby za pomoca destrukturyzacji obiektu.

const person = {
    name: "Anna",
    lastName: "Nowak",
    age: 20,
    hobbies: ["SUP", "taniec", "muzyka", "joga"]
}
const { age: personAge, hobbies: personHobbies } = person;
// to u gory to jest destrukturyzacja obiektu, moe być po prostu
//  const { age, hobbies } = person;
console.log(personAge, personHobbies);

// zaddanie 3 Masz tablicę "numbers" zawierającą kilka liczb całkowitych. Dołącz liczbę 10 na koniec tej
// tablicy. Następnie masz obiekt "user" zawierający pola "name" i "email". Dodaj do obiektu
// "user" nowe pole "age" i przypisz mu wartość 25.
const numbers = [1, 2, 3, 4, 5];
numbers.push(10);  
const user = {
    name: "Anna",
    email: "przykład@gmail.com"
}
user.age = 25;
// albo user['age'] = 25;
console.log(user);
const { age : userAge } = user;
console.log(userAge);

// zadanie 4 Utwórz funkcje strzałkową "add" która przyjmuje dwa parametry funkcji "a" oraz "b", następnie funkcja powinna
// zwracać sumę a+b
const add = (a, b) => a + b;
// inny sposob na to samo to:   const add = (a, b) => { return a + b; }
console.log(add(2, 3));

const multiply = (a, b) => a * b;

//zadanie 5 Utwórz funkcje strzałkową "calculate" która przyjmuje 3 parametry a,b oraz referencja funkcji.
// Następnie w ciele funkcji utwórz zmienna do której przypiszesz wywołanie funkcji przekazanej jako parametr - 
//pamiętaj o przekazaniu do niej parametrów. Na samym końcu zwróć wynik funkcji, czyli naszą zmienna wewnatrz funkcji.
// const calculate = (a, b, callback) => fn(a, b);
// console.log(calculate(2, 3, add));
// 1 opcja
// const calculate = (a, b, callback) => {
//      const value = callback(a, b);
//      return value;
// }
//funkcja w funkcji, funkcja wyszego rzędu, musimy podać tyle argumentów ile ma ta funckja
// oczekiwana jest wartość 15
// console.log(calculate(10, 5, add));

// 2 opcja refractor
const calculate = (a, b, callback) => callback(a, b);
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
// funkcja nadrzęda, która wykona to, co chcemy, ale nie wie, co dokładnie ma zrobić, bo to zależy od funkcji, którą przekazujemy jako argument, to jest funkcja wyższego rzędu - funkcja, która przyjmuje funkcję jako argument, albo zwraca funkcję, albo robi jedno i drugie, jak dajemy calculate (a, b, add) to zadziała tylko, jesli add ma 2 elementy, jak ma 3, to się wywali

// Gdy wszystko będzie się zgadzało zrobimy pewny refractor. Zamiast przekazywac do funkcji "calculate" referencje funkcji
// "add" to przekażmy do wywolania funkcji "calculate" funkcje anonimową (kawałek funkcji add) - to jest wlasnie nasz
// nieszczesny callback :) następnie sprawdz czy wszystko wykonało się prawidłowo
console.log(calculate(10, 5, (a, b) => a + b));
// funkcja anonimowa - zamiast wywołać add jak poprzednio, przezakuje funkcję anonimową, która robi to samo co add, ale jest zapisana w jednej linijce, 
//zamiast w dwóch, jak wyżej
//czyli dodajemy to, co było za add, co ta funkcja add robi
// taka anonimoa nie musoała być wcześniej zdefiniowana, uywane gdy chcemy tego u≥yć raz, 
//ale jak byśmy chcieli częściej uzywac dodwania, to lepiej zdefiniować i robić tak jak w poprzednim przykładzie z calculate 
//i mieć wczesśniej zdefiniowane add, tutaj nie trzeba było mieć zdefiniowanego add

// adanie 7 Utwórz funkcje strzałkową która za parametr przyjmuje obiekt "item" oraz wypisuje go w konsoli.

const showItem = (item) => { console.log(item) };
//wszystko jedno czy dam item czy name, jakoś sobie to nazywamy, e to będzie jakiś element, moze być element tablicy, obiekt, a potem wywoływanie mona da inną naz∑

showItem({name: 'item name'});

// zadanie 8 Na tablicy myAwesomeTab uzyj metody "forEach" do której przekaż referencje funkcji ->
//for each iteruje po tablicy, mona je wziąc, gdzieś wsadzić, ale nie wykonujemy po nich operacji, przekazujemy do funkcji funkcję jako parametr

myAwesomeTab.forEach(showItem);
// drugi sposób z funckją anonimową
myAwesomeTab.forEach((item) => { console.log(item) });

// zadanie nr 9 Utwórz zmienna o nazwie "updatedAwesomeTab" korzystając z tablicy myAwesomeTab i odpowiedniej metody
// tablicowej i przekaż parametr czyli nasz callback (funkcja anonimowa) która przyjmuje parametr "item" dzieki czemu
// będziemy mieć dostęp do kazdego elementu tablicy podczas iteracji, następnie zwróc element zmodyfikowany o prefix
// "new …"
// I opcja 
const updatedAwesomeTab = myAwesomeTab.map((item) => `new ${item}`);
// drugi sposob
// const updatedAwesomeTab = myAwesomeTab.map((item) => {
//     return `new ${item}`;
// });
console.log(updatedAwesomeTab);

// zadanie 10 Utwórz funkcje strzałkową która przyjmuje dwa parametry "a" oraz "b" i zwraca większą z liczb.

const biggerValue = (a, b) => (a > b ? a : b);
console.log(biggerValue(2, 3));

// zadanie dodatkowe, utwórz obiekt, z 3 elemenntami, w którym kady element będzie miał jakieś id,  i name
// na nowy element, zwróć nową tablicę, z nowym elementem
const objectTab = [
    {id: '1',
    name: 'name1',
    },
    {id: '2',
    name: 'name2',
    },
    {id: '3',
    name: 'name3',
    },
]
    //usuń element nr 2 z tablicy

    
    //zmiana nazwhy obiektu nr 2
    //pusta funcka anonimowa to ()=> {ciało funkcji}
    const filteredTab = objectTab.map(item => {
     if (item.id === '2') {
         return {
                id: '2',
                name: 'updejted name'   
         }
        }
         return item;
    })
    // to drugie return działa jak else return
    // sposób na usunięcie elementu drugiego z tablicy, zwróci nam nową tablicę, bez elementu nr 2
    // const newObjectTab = objectTab.filter((item) => item.id !== '2');
    const newObjectTab = objectTab.filter(item => item.id !== '2');
    // albo
    const newTab = objectTab.filter((item, index) => index !== 1);
    console.log(newTab); // Wynik: [{id: '1', name: 'name1'}, {id: '3', name: 'name3'}]
    // albo
    
    objectTab.splice(1, 1); // Usuwamy jeden element z indeksem 1
    console.log(objectTab); // Wynik: [{id: '1', name: 'name1'}, {id: '3', name: 'name3'}]


    // wszystkie elementy mające warunek true, trafią do nowej tablicy
    console.log(filteredTab);
    console.log(newObjectTab);

    // zadanie 10 Utwórz zmienna o nazwie "filteredAwesomeTab" która będzie przechowywać przefiltrowane elementy które maja
// length > 3

const filteredAwesomeTab = myAwesomeTab.filter((item) => item.length >= 3);
console.log(filteredAwesomeTab);
// przy obiekcie trzeba by dać .length, ale przy stringu nie trzeba, bo to jest właściwość, a nie obiekt, obiekt musiałby mieć właściwość length, żeby to zadziałało

// 
// Utwórz w index.html input o ID = "firstName" i atrybucie "name" === "firstName" następnie w index.js utwórz funkcje strzałkową o nazwie
//  "getFormData" w której utworzysz zmienna która przechowuje element input pobrany dzięki
// "querySelector", na samym końcu wypisz wynik w konsoli. Aby
// sprawdzić czy wszystko gra > wywolaj funkcje

const getInputFromHtml = () => {
    const input = document.querySelector('#firstName');
    const {value, name} = input;
    console.log("value", value);
    console.log("name", name);
}
getInputFromHtml();
// tutaj w value wyświetli się tylko wyraz value ale bez właściwości, bo jej nie ma, a w name wyświetli się Firstname
// value to to co wpiszemy w inputa i będzie się zmieniać, a name będzie na sztywno

//tworzenie elementów w dom za pomocą js., moemy dodać divy, spany, h1, h2, h3, p, inputy, buttony, itd
// możemy dodać do nich klasy, id, atrybuty, eventy, itd
//możemy dodać do nich tekst, obrazki, inne elementy, itd, moemy je tez nbadpisać
//możemy je dodać do innych elementów, np do body, do diva, itd
// robimy to tutaj, gdy np nowe informacje z formularza trafiły do htmla, albo jak chcemy coś wyświetlić, albo jak chcemy coś ukryć, gdy np z apo pobieramy dane, zrobić listę z elementów z serwera
// js stworzy nam dynamicznie te elementy

//Utwórz nowy element H2 w sekcji pierwszej oraz nadaj tekst dla tego
// elementu za pomoca el.textContent = 'text'
// - wypisz utworzony element w konsoli
const header = document.createElement('h2');
header.textContent = 'text';
console.log(header);
//dodawanie h2 do sekcji pierwszej, jak daję const section, to nie musi się nazywać section, ale musi być const, bo to jest zmienna, a jak daję document.querySelector, to musi być section, bo to jest selektor
const section = document.querySelector('#firstSection');
section.append(header);

//usuwanie elem.remove();
//usuwanie po id
// const elementToRemove = document.getElementById('element-to-remove');
const elementToRemove = document.querySelector('#element-to-remove');
elementToRemove.remove();


//element.appendChild(header); - dodaje na końcu
//element.insertBefore(header, element.firstChild); - dodaje na początku
//element.insertBefore(header, element.children[1]); - dodaje na drugim miejscu
//element.replaceChild(header, element.children[1]); - zamienia drugi element na h2
//element.removeChild(header); - usuwa h2 z elementu
//element.innerHTML = ''; - usuwa wszystkie dzieci elementu
//element.outerHTML = ''; - usuwa element wraz z dziećmi


// to od Kunegundy zadanie
// const section = document.getElementById("first-section")
// const list = document.createElement("ul");
// people.forEach(person => {
//   const peopleElement = document.createElement("li");
//   peopleElement.textContent = `Imię: ${person.name}, Wiek: ${person.age}`;
//   list.append(peopleElement);
// });
// section.append(list)

//zdarzenia eventy, to co się dzieje w przeglądarce, jak klikamy, jak przesuwamy, jak coś wpisujemy, itd
//mamy wiele zdarzeń, np klik, scroll, input, change, itd
//możemy je wywołać, jak coś się stanie, np jak klikniemy, to coś się wykona

//zadanie 1 
// Utworz przycisk w html oraz nadaj mu id
// - Pobierz element w JS
// - Napisz prosta funkcje strzalkowa która wypisuje tekst w konsoli
// - Dodaj funkcje na event click do pobranego przycisku
const button = document.querySelector('#firstButton');
button.addEventListener('click', () => { console.log('clicked') });
// click to nazwa stała, nie mona jej zmienić, ale można zmienić na inne zdarzenie, np mouseover, mouseout, itd
// albo
// const clickHandler = () => {
//     console.log('clicked');
// button.addEventListener('click', clickHandler);

//zdarzenie change, dajemy na inpucie, jak coś wpiszemy, to się wywoła
// const input = document.querySelector('#input');
const inputFirstName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');

const newObject = {};

const onChange = (event) => {
    const {value, name} = event.target;

newObject[name] = value;
console.log(newObject);
}
//onChange to funkcja, dopisanie zdarzenie do elementu poprzez addEventListener, jak coś się zmieni, to wywoła się funkcja onChange

inputFirstName.addEventListener('change', onChange);
inputLastName.addEventListener('change', onChange);

// jak wpiszemy coś w inputa, to wywoła się funkcja onChange, a jak wpiszemy coś w inputa lastName, to też wywoła się funkcja onChange
// to było dynamiczne dodanie, dzięki daniu name zamiast firstName a potem dla drugiego inputa pisać te samą funkcję id lastName, to mamy name, pasuje do wszyzstkich inputów, a jak byśmy dali id, to musielibyśmy dla każdego inputa pisać nową funkcję, a tak mamy jedną funkcję dla wszystkich inputów
// event.target to jest element, na którym wywołaliśmy zdarzenie, czyli input, button, itd
// event.target.value to jest wartość, którą wpisaliśmy w inputa, albo kliknęliśmy w button
// event.target.name to jest name, który daliśmy inputowi, buttonowi, itd
// event.target.id to jest id, który daliśmy inputowi, buttonowi, itd

// zadanie
// Utworz input w HTML oraz nadaj mu ID
// - Pobierz element w JS oraz przypisz go do zmiennej
// - Napisz funkcje która pobiera wartosc elementu i wyswietla w
// konsoli
// - Dodaj event podczas zmiany wartosci do inputa wraz z funkcja

const inputAge = document.querySelector('#age');
// const onAgeChange = (event) => {
//     console.log(event.target.value);
// }
// inputAge.addEventListener('change', onAgeChange);
// albo
inputAge.addEventListener('change', (event) => { console.log(event.target.value) });
//zamiast dawać 'change' () => { console.log('zmieniono') } to dajemy funkcję, która wywoła się, jak coś się zmieni, a jak dajemy 'click' to wywoła się funkcja, jak klikniemy, dlatego dajemy onAgeChange, bo to jest funkcja, która wywoła się, jak coś się zmieni
// pierwszy parametr to np. click, albo change
// drugi parametr to funkcja strzałkowa callback, która się wywoła, jak coś się zmieni, albo jak klikniemy
// przy zdarzeniu change otrzymujemy dostęp jego właściwości, jak value, name, id, itd
//jeśli chcemy sczytać parametr z inputa, to musimy dodać event.target.value, bo event to jest input, a target to jest właściwość, którą chcemy sczytać, a value to jest wartość, którą wpisaliśmy w inputa
// value - to co wpiszemy, to jest wpisywane do value w inpucie
// name - to jest to, co wpiszemy w name w inpucie

//zdarzenie submit wymonywane jest na formularzu, nie na przycisku, 
// const myForm = document.querySelector('#myForm');
// // i sposób
//     // const emailInput = document.querySelector('#email');
//     // console.log(emailInput.value);
//     const emaiInput = document.querySelector('#email');
// myForm.addEventListener('submit', (event) => {
//     //funkcja usuwająca domyśle zachowanie w formularzu, czyli przeładowanie strony
//     event.preventDefault();
//     const emailInputValue = document.querySelector('#email').value;
//     console.log(emailInput.value);
// });
// myForm.addEventListener('change', (event) => {
//     console.log(event.target.value);
// });
// jak wpiszę coś w formularz, to jak wcisnę enter, strona się przeładuje, ale jak dam event.preventDefault(); to strona się nie przeładuje, tylko wywoła się funkcja, jak wpiszę coś w formularz, to jak wcisnę enter, to wywoła się funkcja, a jak dam event.preventDefault(); to strona się nie przeładuje, tylko wywoła się funkcja
// event.preventDefault(); - zatrzymuje domyślne zachowanie przeglądarki, czyli przeładowanie strony, jak damy to, to strona się nie przeładuje, tylko wywoła się funkcja

// zadanie Utworz formularz z jednym inputem oraz przyciskiem z typem submit
// - Pobierz formularz w JS
// - Utworz funkcje która pobierze oraz wyswietli dane z formularza
// - Dodaj funkcje do formularza wywolana na event submit
// const myForm2 = document.querySelector('#myForm');

const myForm = document.querySelector("#myForm");

// I sposób na pobieranie danych
const emailInput = document.querySelector("#email");

myForm.addEventListener("submit", (event) => {
  // funkcja usuwajaca domyslnie zachowanie formularza
  event.preventDefault();
  // II sposób na pobieranie danych
  // const emailInputValue = document.querySelector("#email").value;
  
  console.log(emailInput.value);
});

// ## Zadanie 1 - pobieranie danych z formularza 
// Utwórz formularz z dwoma polami email i password 
// Utwórz funkcje która bedzie pobierać wartości z utworzonego formularza 
// Pobierz formularz 
// Nadaj event listener dla formularza, przekazujac referencje utworzonej powyzej funkcji 
// Przetestuj logike


const newForm = document.querySelector('#newForm');
// const userlist = document.querySelector('#lista');
const mail2 = document.querySelector('#mail2');
const password = document.querySelector('#password');
//const getData = (event) => {
    //event.preventDefault();
    // console.log('email: £{mail2.value}, password: £{password.value}');
    //newForm.addEventListener('submit', getData);
    //tak zrobił Szymon
    
newForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(mail2.value, password.value);
    addToList(password.value, mail2.value);
});


// ## Zadanie 2 - Tworzenie listy na bazie danych 
// 1. Utwórz w HTML liste <ul> - aktualnie bedzie pusta
// 2. Utwórz funkcje która będzie dodawać element <li> do listy z danymi przekazanymi jako parametr funkcji
// 3. Wywolaj na początku funkcje na "sucho" przekazujac statyczne dane
// 4. Jezeli utworzyło nam element w tablicy i wyswietlioło się to w przeglądarce to spróbuj wywolać funkcje powyżej> w funkcji która pobiera dane z formularza
const ul = document.querySelector('#lista');
const addToList = (password, email) => {
    const newListElement = document.createElement('li');
    newListElement.textContent = `email: ${email}, password: ${password}`;
    const button = document.createElement('button');
    button.textContent = 'remove';
    button.addEventListener('click', () => {
        newListElement.remove();
    });
    newListElement.append(button);
    ul.append(newListElement);
    
}
addToList('pierwszy element');

// ## Zadanie 4 - Dodawanie listy elementów
// 1. Utwórz tablice składającą sie z trzech obiektów o strukturze {email, password}
// 2. Utwórz funkcje która na bazie tablicy używając odpowiedniej metody tablicowej (która iteruje elementy) nadpisuje liste w html
const people = [
    {
        email: 'email1',
        password: 'password1'
    },
    {
        email: 'email2',
        password: 'password2'
    },
    {
        email: 'email3',
        password: 'password3'
    }
];


const addPeopleToList = (people) => {
    ul.textContent = '';
    //wyzsza linijka usuwa wszystkie elementy z listy, jak byśmy dali innerHTML, to byśmy usunęli wszystko, ale to jest bardziej wydajne, bo nie musi przetwarzać tego, co jest w środku, tylko usuwa to, co jest w środku
    people.forEach(person => {
        addToList(person.email, person.password);
    });
};
addPeopleToList(people);




















