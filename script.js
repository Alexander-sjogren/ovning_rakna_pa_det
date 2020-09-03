const btn = document.getElementById("btn");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

let input1Value = 0;
let input2Value = 0;

function btnPress() {
    input1Value = input1.value;
    input1ValueInt = parseInt(input1Value);
    input2Value = input2.value;
    input2ValueInt = parseInt(input2Value);
    console.log(input1Value);
    console.log(input2Value);
    selection();
}
function selection() {
    let selectedValue = document.getElementById("math").value;
    switch (selectedValue) {
        case "+":
            let additionResult = input1ValueInt + input2ValueInt;
            console.log(additionResult);
            fieldOutput(input1Value + " + "  + input2Value + " = " + additionResult);
            break;
        case "-":
            let subtractionResult = input1ValueInt - input2ValueInt;
            console.log(subtractionResult);
            fieldOutput(input1Value + " - "  + input2Value + " = " + subtractionResult);
            break;
        case "/":
            let divisionResult = input1ValueInt / input2ValueInt
            console.log(divisionResult);
            fieldOutput(input1Value + " / "  + input2Value + " = " + divisionResult);
            break;
        case "*":
            let multiplicationResult = input1ValueInt * input2ValueInt;
            console.log(multiplicationResult);
            fieldOutput(input1Value + " * "  + input2Value + " = " + multiplicationResult);
            break;
    }
}

function fieldOutput (test, resultat) {
    const newLegend = document.createElement("legend");
    const legendOutput = document.createTextNode(test, resultat);
    newLegend.appendChild(legendOutput);
    const output = document.getElementById("output");
    output.appendChild(newLegend);
}
