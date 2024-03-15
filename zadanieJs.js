// ## Zadanie 5 - Stwórz klasę o nazwie Calculator.
// - Klasa Calculator powinna zawierać następujące metody:
// - add(...args): Metoda dodaje podane liczby do wyniku kalkulatora.
// - subtract(...args): Metoda odejmuje podane liczby od wyniku kalkulatora.
// - multiply(...args): Metoda mnoży aktualny wynik przez podane liczby.
// - divide(...args): Metoda dzieli aktualny wynik przez podane liczby.
// - clear(): Metoda czyści wynik kalkulatora.
// - getResult(): Metoda zwraca aktualny wynik kalkulatora.
// oraz pola:
// - wynik
// - wartosc pierwszej kliknietej cyfry (kalkulatory dzialaja tak, ze na poczatku klikamy liczbe i dopiero wybieramy operacje dlatego musimy gdzies przechowac wartosc pierwszej liczby przed wykonaniem operacji)

// Następnie na bazie tej klasy i metod tworzymy sobie kalkulator na stronie za pomoca JS lub HTML
// - kazdy przycisk powinien wykonywac jedna z metod obiektu kalkulatora

class Calculator {
    constructor() {
        this.firstNumber = null;
        this.secondNumber = null;
        this.currOperation = null;
    }

    handleNumberClick(number) {
        if (this.firstNumber === null) {
            this.firstNumber = number;
        } else {
            this.secondNumber = number;
        }

        console.log(`First Number: ${this.firstNumber}, Second Number: ${this.secondNumber}`);
    }

    handleOperationClick(operation) {
        this.currOperation = operation;
        console.log(`Current Operation: ${this.currOperation}`);

        if (this.currOperation === "add") {
            this.add();
        }
    }

    add() {
        if (this.firstNumber !== null && this.secondNumber !== null) {
            const result = this.firstNumber + this.secondNumber;
            console.log(`Result: ${result}`);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const butt_add = document.querySelector("#add");
    const butt_zero = document.querySelector("#zero");
    const butt_one = document.querySelector("#one");
    const butt_two = document.querySelector("#two");
    const butt_three = document.querySelector("#three");
    const butt_four = document.querySelector("#four");
    const butt_five = document.querySelector("#five");
    const butt_six = document.querySelector("#six");
    const butt_seven = document.querySelector("#seven");
    const butt_eight = document.querySelector("#eight");
    const butt_nine = document.querySelector("#nine");

    const calculator = new Calculator();

    butt_zero.addEventListener('click', () => {
        calculator.handleNumberClick(0);
    });

    butt_one.addEventListener("click", () => {
        calculator.handleNumberClick(1);
    });

    butt_two.addEventListener("click", () => {
        calculator.handleNumberClick(2);
    });

    butt_three.addEventListener("click", () => {
        calculator.handleNumberClick(3);
    });

    butt_four.addEventListener("click", () => {
        calculator.handleNumberClick(4);
    });

    butt_five.addEventListener("click", () => {
        calculator.handleNumberClick(5);
    });

    butt_six.addEventListener("click", () => {
        calculator.handleNumberClick(6);
    });

    butt_seven.addEventListener("click", () => {
        calculator.handleNumberClick(7);
    });

    butt_eight.addEventListener("click", () => {
        calculator.handleNumberClick(8);
    });

    butt_nine.addEventListener("click", () => {
        calculator.handleNumberClick(9);
    });

    butt_add.addEventListener("click", () => {
        calculator.handleOperationClick("add");
    });
});