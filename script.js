function test() {
    let selectedValue = document.getElementById("math").value;
    console.log(selectedValue);
    switch (selectedValue) {
        case "+":
            console.log("+ block");
            break;
        case "-":
            console.log("- block");
            break;
        default:
            break;
    }
}
