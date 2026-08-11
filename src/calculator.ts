export {}

const number1Element = document.getElementById("number1") as HTMLInputElement
const number2Element = document.getElementById("number2") as HTMLInputElement
const operationElement = document.getElementById("operation") as HTMLSelectElement
const resultElement = document.getElementById("result") as HTMLElement
const calculateButton = document.getElementById("calculate") as HTMLButtonElement

function calculate(): void {
    const number1: number = Number(number1Element.value)
    const number2: number = Number(number2Element.value)

    let result: number

    switch (operationElement.value) {
        case "sum":
            result = number1 + number2
            break

        case "difference":
            result = number1 - number2
            break

        case "multiplication":
            result = number1 * number2
            break

        case "division":
            result = number1 / number2
            break

        default:
            result = 0
    }

    resultElement.innerHTML = result.toString()
}

calculateButton.addEventListener("click", calculate)