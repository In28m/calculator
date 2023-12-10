class Calculator {
    constructor() {
        this.display = document.querySelector(".current-operand");
        this.buttons = document.querySelectorAll(".calculator-grid button");
        this.displayValue = '';
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener("click", () => {
                this.ButtonClick(button.innerText);
            });
        });
    }

    ButtonClick(value) {
        console.log(`Paspaustas mygtukas: ${value}`);

        switch (value) {
            case "AC":
                this.displayValue = '';
                break;
            case "←":
                if (this.displayValue) {
                    this.displayValue = this.displayValue.slice(0, -1);
                }
                break;
            case "=":
                this.displayValue = eval(this.displayValue);
                break;
            default:
                this.displayValue += value;
        }

        if (value === "DEL") {
            this.updateDisplay('');
        } else {
            this.updateDisplay(this.displayValue);
            console.log(`Ištrynė: ${this.displayValue}`);
        }
    }

    updateDisplay(value) {
        console.log(`Ekranas atnaujinas: ${value}`);
        this.display.innerText = value;
    }
}

const calculator = new Calculator();
calculator.init();






