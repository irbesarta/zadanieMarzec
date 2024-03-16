// Format jsonowy - format pliku, rozszerzenie .json
// Podobny do js
// Format do zapisywania danych zamianst txt, do przechowywania danych

// paginacja - podział danych na strony, np na stronie 10 elementów, a mamy 100 elementów, to mamy 10 stron, dodajemy do tego endpointu parametr, który mówi, która strona ma być wyświetlona
// np /api/products?page=2
// dane wymagane i dane optymalne, przy aktualizacji nie musimy wysyłać wszystkoego, jak zmieniło się nazwusko człowieka, to wysyłamy tylko nazwisko
//jest to format podobny do obietkow tylko ze wszystkie nazwy kluczy i wlasciwosci są w ""

//do tej pory robiliśmy kod synchrniniczny, z góry do dołu, a teraz zaczniemy robić kod asynchroniczny, czyli kod, który wykonywany jest w tle, a my nie czekamy na jego zakończenie, tylko idziemy dalej
// jak pobieramy jakieś dane z serwera, to musimy czekać na odpowiedź, a w tym czasie możemy wykonywać inne rzeczy, np wyświetlać inne dane, czy wykonywać inne operacje, najpierw wyświetlają się dane z cache, a potem z serwera, najpierw synchroniczne się wykonają, a potem asynchroniczne
// w js mamy kilka sposobów na asynchroniczne wykonywanie kodu

//fetch API - nowoczesne API do wykonywania zapytań do serwera, zwraca promise, czyli obiekt, który reprezentuje wynik operacji asynchronicznej, promise ma 3 stany: pending, fulfilled, rejected
//API to granicznik między serwerem a przeglądarką, API to zestaw reguł, które określają, jak programy komunikują się ze sobą
// jak ktoś chce API, to chce całą dokumentcację z projektu, jakie są endpointy, jakie są parametry, jakie są zwracane dane, jakie są błędy, jakie są statusy, a nie cały kod
//fetch zwraca promise, który zwraca response, który zwraca promise, który zwraca dane

// mamy kilka metod do wykonywania zapytań, np GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
// podstawowa metoda w fetch to GET, ale możemy ją zmienić, podając drugi parametr, który jest obiektem, w którym możemy podać metodę, np POST
// np fetch('http://localhost:3000/products', {method: 'POST', body: JSON.stringify({name: 'Product 1', price: 100})})
// metoda get jrst domyślą metoda, więc nie musimy jej podawać, nie zapisujemy jej w obiekcie
//GET - pobieranie danych, POST - dodawanie danych, PUT - aktualizowanie danych, DELETE - usuwanie danych, PATCH - aktualizowanie części danych, OPTIONS - zwraca dostępne metody dla danego zasobu, HEAD - zwraca nagłówki dla danego zasobu
// POST - zawsze musimy podać body, w którym podajemy dane, które chcemy dodać, w formacie json, czyli musimy je przekonwertować na stringa, bo body musi być stringiem, a nie obiektem, dodaje elementy do bazy danych, a nie zwraca ich
//PUT - zawsze musimy podać body, w którym podajemy dane, które chcemy zaktualizować, w formacie json, czyli musimy je przekonwertować na stringa, bo body musi być stringiem, a nie obiektem, aktualizuje elementy w bazie danych, a nie zwraca ich - jeeli znajdzie element to go edytuje, a jak nie znajdzie, to dodaje
// PATCH tylko aktualizuje, dlatego put bezpieczniejszy
//DELETE - usuwa elementy z bazy danych, a nie zwraca ich

// obietnice - promise - obiekt, który reprezentuje wynik operacji asynchronicznej, promise ma 3 stany: pending, fulfilled, rejected
// metoda fetch zwraca obekt obietnucy, który mozna obsłuyć za pomocą then() i catch()

//fetch zwraca promise, który zwraca response, który zwraca promise, który zwraca dane

// request - żądania, które wysyłamy do serwera, np pobieranie danych, dodawanie danych, aktualizowanie danych, usuwanie danych