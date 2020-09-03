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
            break;
        case "-":
            let subtractionResult = input1ValueInt - input2ValueInt;
            console.log(subtractionResult);
            break;
        case "/":
            let divisionResult = input1ValueInt / input2ValueInt
            console.log(divisionResult);
            break;
        case "*":
            let multiplicationResult = input1ValueInt * input2ValueInt;
            console.log(multiplicationResult);
            break;
    }
}


