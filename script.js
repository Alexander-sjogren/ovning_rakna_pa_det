const btn = document.getElementById("btn");
function btnPress() {
    selection();
}
function selection() {
    let selectedValue = document.getElementById("math").value;
    switch (selectedValue) {
        case "+":
            console.log("+ block");
            break;
        case "-":
            console.log("- block");
            break;
        case "/":
            console.log("/ block");
            break;
        case "*":
            console.log("* block");
            break;
    }
}


